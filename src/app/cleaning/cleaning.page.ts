import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras} from '@angular/router'; 
import { SubMenus } from '../app.constant';
@Component({
  selector: 'app-cleaning',
  templateUrl: './cleaning.page.html',
  styleUrls: ['./cleaning.page.scss'],
})
export class CleaningPage implements OnInit {

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
