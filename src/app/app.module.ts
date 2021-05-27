import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchInfoComponent } from './components/fetch-info/fetch-info.component';
import { DetailInfoComponent } from './components/detail-info/detail-info.component';
import { FormsModule } from '@angular/forms';
import { TrainCenterComponent } from './components/train-center/train-center.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FetchInfoComponent,
    DetailInfoComponent,
    TrainCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
