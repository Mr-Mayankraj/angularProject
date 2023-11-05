import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  images = [ 'https://t3.ftcdn.net/jpg/05/35/13/82/360_F_535138292_62ZnI4Hcw37J8Jaeg4E9TzJwUciCwSnp.jpg','https://t4.ftcdn.net/jpg/02/92/64/87/360_F_292648792_AgsfVq6bYBvjl43moDD8f0knd4olFplG.jpg', 'https://www.screenkit.xyz/wp-content/uploads/2020/10/Black-White-final-3.jpg','https://media.bakingo.com/trendy_cake_bk_hp_banner_d_5.jpg',
  'https://img.freepik.com/premium-photo/black-friday-concept-shopaholic-doll-pink-background_996173-2424.jpg']; 
  currentIndex = 0;
 ngOnInit() {
  this.startAutoPlay();
  }
  startAutoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 1000); 
  }
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }


}
