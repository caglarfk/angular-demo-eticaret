import { Cart } from './card.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Order{
    public id?:Number|null
    public name?: String|null
    public address?: String|null
    public city?: String|null
    public phone?: String|null
    public email?: String|null

    public isSent?: Boolean = false

    constructor(
          public cart: Cart) {  }

    clearOrder() {
        this.id = null ;
        this.name = this.address = this.city=this.phone=this.email=null ;
        this.isSent = false;
        this.cart.clear();
    }
}