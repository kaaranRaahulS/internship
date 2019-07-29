import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PestcontrolPage } from './pestcontrol.page';

const routes: Routes = [
  {
    path: '',
    component: PestcontrolPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PestcontrolPage]
})
export class PestcontrolPageModule {}
