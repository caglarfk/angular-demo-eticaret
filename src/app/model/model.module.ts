import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http"
import { RestService } from "./rest.service";
import { ProductRepository } from "./product.repository";
import { CategoryRepository } from "./category.repostory";
import { NavbarRepository } from "./navbar.repostory";
import { Cart } from "./card.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";

@NgModule({
imports:[HttpClientModule],
providers:[RestService,ProductRepository,CategoryRepository,NavbarRepository,Cart,Order,OrderRepository]
})
export class ModelModule{}