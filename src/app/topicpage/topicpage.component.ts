import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-topicpage',
  templateUrl: './topicpage.component.html',
  styleUrls: ['./topicpage.component.css']
})
export class TopicPageComponent implements OnInit {
  topicPageUrl = '../../assets/homepage.jpeg';
  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
  }

  randomTopic(){
    const num =  Math.random() * 8;
    if(num < 1){
      this.router.navigate(['topicpage/brexit']);
    }else if(num >= 1 && num < 2){
      this.router.navigate(['topicpage/climate']);
    }else if(num >= 2 && num < 3){
      this.router.navigate(['topicpage/covid']);
    }else if(num >= 3 && num < 4){
      this.router.navigate(['topicpage/politics']);
    }else if(num >= 4 && num < 5){
      this.router.navigate(['topicpage/boris']);
    }else if(num >= 5 && num < 6){
      this.router.navigate(['topicpage/military']);
    }else if(num >= 6 && num < 7){
      this.router.navigate(['topicpage/america']);
    }else{
      this.router.navigate(['topicpage/racism']);
    }   
  }
}