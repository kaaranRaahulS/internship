import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Tab2PageModule } from '../tab2/tab2.module';
import { Tab2Page } from '../tab2/tab2.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  constructor(private router : Router) {
  
   
  }
  salmen()
  {
    this.router.navigate(['../salonmen']);
  }
  salwmen()
  {
    this.router.navigate(['../salonwomen'])
  }
  massagehome()
  {
    this.router.navigate(['../massage'])
  }
  eleccarplum()
  {
    this.router.navigate(['../eleccarplum'])
  }
  applandelec()
  {
    this.router.navigate(['../applandelcrep'])
  }
  clean()
  {
    this.router.navigate(['../cleaning'])
  }
  painting()
  {
    this.router.navigate(['../painting'])
  }
  pest()
  {
    this.router.navigate(['../pestcontrol'])
  }
  fitness()
  {
    this.router.navigate(['../fitnessandyoga'])
  }


}
