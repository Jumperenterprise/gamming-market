import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'assets/images/banner-5.jpg',
    'assets/images/banner-4.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg',
    'assets/images/banner-1.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
