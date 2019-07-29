import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalonwomenPage } from './salonwomen.page';

const routes: Routes = [
  {
    path: '',
    component: SalonwomenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalonwomenPage]
})
export class SalonwomenPageModule {}
