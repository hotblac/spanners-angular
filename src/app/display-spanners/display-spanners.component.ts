import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-spanners',
  templateUrl: './display-spanners.component.html',
  styleUrls: ['./display-spanners.component.css']
})
export class DisplaySpannersComponent implements OnInit {

  spanners: any[] = [
    {
      name: 'Bertha',
      size: 12
    },
    {
      name: 'Keeley',
      size: 14
    },
    {
      name: 'Georgie',
      size: 15
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
