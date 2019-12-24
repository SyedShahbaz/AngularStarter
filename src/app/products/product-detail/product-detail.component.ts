import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // Selector tag is only used if we want to nest the component. If we want to show it as a router link we dont need a selector tag.
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: IProduct;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // + is a javascript short cut to convert a string to a numeric id. what i need.
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `:${id}`;
    this.product = {
      productId: id,
      productName: 'Leaf-Reak',
      productCode: 'as',
      releaseDate: '122',
      description: '1212',
      price: 122,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
