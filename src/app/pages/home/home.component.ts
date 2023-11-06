import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  images = [ 'https://www.heromotocorp.com/content/dam/hero-aem-website/in/products/sports-adventure/xtreme-160r/stealth-edition/Xtreme-Stealth-Bike-with-Phone.png','https://t4.ftcdn.net/jpg/02/92/64/87/360_F_292648792_AgsfVq6bYBvjl43moDD8f0knd4olFplG.jpg', 'https://www.screenkit.xyz/wp-content/uploads/2020/10/Black-White-final-3.jpg','https://media.bakingo.com/trendy_cake_bk_hp_banner_d_5.jpg',
  'https://github.com/07-Mayankraj/07-Mayankraj/raw/master/mayank.gif']; 
  currentIndex = 0;
 ngOnInit() {
  this.startAutoPlay();
  }
  startAutoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }


}
