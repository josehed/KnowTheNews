import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  homePageUrl = '../../assets/homepage.jpeg';
  constructor() { }

  ngOnInit(): void {
    console.log("hello from homescreen");
  }
}
