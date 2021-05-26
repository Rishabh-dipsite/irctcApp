import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchInfoComponent } from './components/fetch-info/fetch-info.component';


const routes: Routes = [
  {path:'', component: FetchInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
