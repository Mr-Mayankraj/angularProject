import { Component, OnInit } from '@angular/core';
import * as jsonData from '../../../assets/data.json';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class orderComponent implements OnInit {
  jsonData : any = jsonData.movies;

  pageSize = 6; // Number of items per page
  pagedData: any[] = [];
  currentPage = 1;
  totalPages: number = 0;

  tableHeaders : any[] = Object.keys(jsonData.movies[0])


  ngOnInit(): void {
    this.updatePagedData();
    console.log(this.tableHeaders)
  }
  updatePagedData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedData = this.jsonData.slice(startIndex, startIndex + this.pageSize);
    this.totalPages = Math.ceil(this.jsonData.length / this.pageSize);
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedData();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedData();
    }
  }


}
