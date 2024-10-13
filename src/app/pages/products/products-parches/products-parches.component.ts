import { Component } from '@angular/core';

@Component({
  selector: 'app-products-parches',
  standalone: true,
  imports: [],
  templateUrl: './products-parches.component.html',
  styleUrl: './products-parches.component.css'
})

export class ProductsParchesComponent {
  products = [
    {
      name: 'Vossen Precision VPS-306',
      image: 'assets/vossen-precision.jpg',
      rating: 5,
      price: 225.00
    },
    {
      name: 'ADV 15 Track Spec',
      image: 'assets/adv-15-track.jpg',
      rating: 4,
      price: 625.00
    },
    {
      name: 'Vellano Concave VCY',
      image: 'assets/vellano-concave.jpg',
      rating: 5,
      price: 520.00
    }
  ];
}
