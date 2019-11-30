import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { MaterialModules } from '../../material-modules';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    MaterialModules
  ],
  exports: [HomePageComponent],
  entryComponents: [HomePageComponent]
})
export class HomePageModule { }
