import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {
  products:any = [1, 2, 3, 4];
  
  ngOnInit() {
    this.products = products;
  }
}
