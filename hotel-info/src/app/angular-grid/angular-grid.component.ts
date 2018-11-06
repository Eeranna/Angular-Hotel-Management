import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-grid',
  templateUrl: './angular-grid.component.html',
  styleUrls: ['./angular-grid.component.css']
})
export class AngularGridComponent implements OnInit{

  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price', editable: true}
  ];

  rowData = [];

  ngOnInit() {
    fetch('https://api.myjson.com/bins/15psn9')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
  }

}
