import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../../assets/data.json';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  jsonData : any = jsonData.movies;
  constructor() { }

  ngOnInit(): void {

    console.log(this.jsonData)
  }

}
