import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FitnessandyogaPage } from './fitnessandyoga.page';

const routes: Routes = [
  {
    path: '',
    component: FitnessandyogaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FitnessandyogaPage]
})
export class FitnessandyogaPageModule {}
