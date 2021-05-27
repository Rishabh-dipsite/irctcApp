const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const schedule = require('./../database/schedule.json')
const availability = require('./../database/trainAvailability.json')

const dbUrl = path.join(__dirname, '/../database/');

router.get('/stations', (req, res) => {
    console.log('stations');
    fs.readFile(path.join(dbUrl + 'stations.json'), (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        console.log(data);
        res.json(data);
    })
});

router.get('/trains/:src/:dest/:date', (req, res) => {
    console.log('trains with params' + req.url);
    const dt = new Date(req.params.date);
    fs.readFile(path.join(dbUrl + 'trains.json'), (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        let filteredTrains = data.filter(x => x.runningDays.indexOf(dt.getDay()) > -1);
        console.log(schedule);
        filteredTrains = filteredTrains.filter(x => {
            let sch = schedule.find(s => s._id == x.scheduleId)
            const srcIndex = sch.schedule.indexOf(req.params.src)
            const destIndex = sch.schedule.indexOf(req.params.dest)
            if (srcIndex > -1 && destIndex > -1 && srcIndex < destIndex) {
                x.source = sch.schedule[0];
                x.destination = sch.schedule[sch.schedule.length - 1];
                x.availability = x.totalSeats;
                const trainAvb = availability[x._id];
                if(trainAvb){
                    if(trainAvb[req.params.date])
                        x.availability = trainAvb[req.params.date]
                }

                return true;
            }
            return false;
        })
        console.log(filteredTrains);
        res.json(filteredTrains);
    })
});

router.get('/trains', (req, res) => {
    console.log('trains');
    fs.readFile(path.join(dbUrl + 'trains.json'), (err, data) => {
        if (err) throw err;
        data = JSON.parse(data);
        console.log(data);
        res.json(data);
    })
});

module.exports = router;