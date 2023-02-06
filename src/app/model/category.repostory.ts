import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';

import { RestService } from './rest.service';

@Injectable()


export class CategoryRepository implements OnInit {
    private category: Category[] = [];


    constructor(
        private restService: RestService
    ) { 
          this.restService
            .getCategories()
            .subscribe(category => this.category = category); }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
     
    }
     getCategoryById(id: number): Category  | undefined{
        return this.category.find(i => i.id == id);

    }
    getCategory(): Category[]{
        return this.category;
    }

};