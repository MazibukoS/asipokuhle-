import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ventures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ventures.component.html',
  styleUrl: './ventures.component.css',
})
export class VenturesComponent implements OnInit {
  slides = [
    { image: '../assets/Sasol.jpg', caption: 'First slide' },
    { image: '../assets/engen.jpg', caption: 'Second slide' },
    { image: '../assets/VOPAK.png', caption: 'Third slide' },
  ];

  @ViewChild('carouselSlide') carouselSlide: ElementRef | undefined;

  images = [
    'https://via.placeholder.com/800x300?text=Image+1',
    'https://via.placeholder.com/800x300?text=Image+2',
    'https://via.placeholder.com/800x300?text=Image+3',
  ];

  currentIndex = 0;
  slideWidth: number =0;

  ngOnInit() {
    if (this.carouselSlide) {
      this.slideWidth = this.carouselSlide.nativeElement.clientWidth;
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
  }
}
