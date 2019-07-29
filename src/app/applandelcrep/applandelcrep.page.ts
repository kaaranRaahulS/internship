import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router';
import { SubMenus } from '../app.constant';
@Component({
  selector: 'app-applandelcrep',
  templateUrl: './applandelcrep.page.html',
  styleUrls: ['./applandelcrep.page.scss'],
})
export class ApplandelcrepPage implements OnInit {

  constructor(private router : Router) { }
  menus : any;
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
