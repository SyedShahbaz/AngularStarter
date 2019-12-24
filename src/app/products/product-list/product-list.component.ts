import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pagTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;
  _listfIlter: string;
  errorMessage: string;

  get listFilter(): string {
    return this._listfIlter;
  }

  set listFilter(value: string) {
    this._listfIlter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [];
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products,
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  toggleimage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pagTitle = 'Product List ' + message;
  }


}
