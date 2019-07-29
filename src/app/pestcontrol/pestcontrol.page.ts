import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';
import { SubMenus } from '../app.constant';
@Component({
  selector: 'app-pestcontrol',
  templateUrl: './pestcontrol.page.html',
  styleUrls: ['./pestcontrol.page.scss'],
})
export class PestcontrolPage implements OnInit {
  menus : any;
  constructor( public router : Router) { }

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
