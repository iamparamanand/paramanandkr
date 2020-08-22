import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  lat = 13.0605866;
  lng = 77.5515342;

  constructor() { }

  ngOnInit(): void {
  }

}
