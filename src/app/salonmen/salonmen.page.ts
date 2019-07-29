import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SubMenus } from '../app.constant';

@Component({
  selector: 'app-salonmen',
  templateUrl: './salonmen.page.html',
  styleUrls: ['./salonmen.page.scss'],
})
export class SalonmenPage implements OnInit {

  menus : any;

  constructor(public router : Router) {

   }


   ngOnInit()
   {
     this.menus = SubMenus;
   }
 


  forms(title)
  {
    let trans : NavigationExtras = {
      queryParams:
      {
       type:title
      }
    }

    this.router.navigate(['../form'] ,trans);
  }

}
