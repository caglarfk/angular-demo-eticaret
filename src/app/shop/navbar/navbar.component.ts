import { Component, Input } from '@angular/core';
import { NavbarRepository } from 'src/app/model/navbar.repostory';
import { Navbar } from 'src/app/model/navbar.model';
import { Product } from 'src/app/model/product.model';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(public navbarRepostory:NavbarRepository){}

  get navbars(): Navbar[] {
    return this.navbarRepostory.getNavbarList();

  }

}
