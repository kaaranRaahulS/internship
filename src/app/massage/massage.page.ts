import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router'; 
import { SubMenus } from '../app.constant';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.page.html',
  styleUrls: ['./massage.page.scss'],
})
export class MassagePage implements OnInit {
  menus : any;
  constructor(private router : Router) { }

  ngOnInit() {
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
