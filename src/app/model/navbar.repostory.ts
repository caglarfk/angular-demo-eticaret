import { Injectable, OnInit } from '@angular/core';
import { Navbar } from './navbar.model';
import { RestService } from './rest.service';

@Injectable()
export class NavbarRepository implements OnInit {

    private navbarlist: Navbar[] = [];

    constructor(private restService: RestService) {
   

            this.restService.getNavbars().subscribe(nav => this.navbarlist = nav);
    }

    ngOnInit() {

    }

    getNavbarList(): Navbar[]{
        return this.navbarlist;
    }
}