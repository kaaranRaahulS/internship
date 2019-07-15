import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {
  names:any[];
  images:any[];

  constructor()
  {
    this.names=['Ac Service and Repair','RO or Water Purifier Repair',
  'Washing machine Repair','Refrigirator Repair','Microwave Repair','Chimney Repair',
'Laptop Repair'];

this.images=["../../assets/png/1.png","../../assets/png/2.png","../../assets/png/3.png",
"../../assets/png/4.png","../../assets/png/5.png","../../assets/png/6.png","../../assets/png/7.png",
"../../assets/png/8.png"];
  }
}
