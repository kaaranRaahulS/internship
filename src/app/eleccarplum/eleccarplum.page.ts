import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SubMenus } from '../app.constant';

@Component({
  selector: 'app-eleccarplum',
  templateUrl: './eleccarplum.page.html',
  styleUrls: ['./eleccarplum.page.scss'],
})
export class EleccarplumPage implements OnInit {

  constructor(private router: Router) { }
  menus: any;
  ngOnInit() {
    this.menus = SubMenus;
  }



  forms(title) {
    let trans: NavigationExtras = {
      queryParams:
      {
        type: title
      }
    }

    this.router.navigate(['../form'], trans);
  }
}
