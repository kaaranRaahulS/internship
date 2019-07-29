import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'salonmen', loadChildren: './salonmen/salonmen.module#SalonmenPageModule' },
  { path: 'salonwomen', loadChildren: './salonwomen/salonwomen.module#SalonwomenPageModule' },
  { path: 'massage', loadChildren: './massage/massage.module#MassagePageModule' },
  { path: 'eleccarplum', loadChildren: './eleccarplum/eleccarplum.module#EleccarplumPageModule' },
  { path: 'applandelcrep', loadChildren: './applandelcrep/applandelcrep.module#ApplandelcrepPageModule' },
  { path: 'cleaning', loadChildren: './cleaning/cleaning.module#CleaningPageModule' },
  { path: 'painting', loadChildren: './painting/painting.module#PaintingPageModule' },
  { path: 'pestcontrol', loadChildren: './pestcontrol/pestcontrol.module#PestcontrolPageModule' },
  { path: 'fitnessandyoga', loadChildren: './fitnessandyoga/fitnessandyoga.module#FitnessandyogaPageModule' },
  { path: 'form', loadChildren: './form/form.module#FormPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
