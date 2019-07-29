import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ApplandelcrepPage } from './applandelcrep.page';

const routes: Routes = [
  {
    path: '',
    component: ApplandelcrepPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApplandelcrepPage]
})
export class ApplandelcrepPageModule {}
