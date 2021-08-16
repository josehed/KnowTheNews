import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DataService } from 'src/app/data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  firstQuestion = null;
  secondQuestion = null;

  popUpText = "Make sure you have filled both drop boxes";

  covidPageUrl = '../../assets/politics.png';

  paper_image_dict: { [key:string]:string } = {
    DailyMailUK: '../../assets/DailyMailUK.png',
    FT:'../../assets/FT.jpg',
    Guardian:'../../assets/Guardian.png',
    Telegraph:'../../assets/Telegraph.jpg',
    TheSun:'../../assets/TheSun.png'
  };

  paper_url1 ='';
  paper_url2='';
  test:any = [];
  result: any;
  tweet: any = [];
  headline_1:String = '';
  headline_2:String = '';
  paperName_1:String = '';
  emptybox1 = [];
  emptybox2 = [];
  paperbox1 = ["PAPER1"];
  paperbox2 = ["PAPER2"];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveData();
  }

  getimagepb1(){
    if(this.paperbox1[0] == "PAPER1"){
      return this.paper_url1;
    }
    return this.paper_url2;
  }

  getimagepb2(){
    if(this.paperbox2[0] == "PAPER1"){
      return this.paper_url1;
    }
    return this.paper_url2;
  }

  getEmpty1(){
    if(this.emptybox1[0] == "PAPER1"){
      return this.paper_url1;
    }
    return this.paper_url2;
  }
  
  getEmpty2(){
    if(this.emptybox2[0] == "PAPER1"){
      return this.paper_url1;
    }
    return this.paper_url2;
  }

  moveFrom1Predicate = () => {
    if (this.emptybox1.length > 0) {
      return false;
    }
    return true;
  }

  moveFrom2Predicate = () => {
    if (this.emptybox2.length > 0) {
      return false;
    }
    return true;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  public submitPredicate() {
    this.result;
    let pName1 = this.paper_url1;
    let pName2 = this.paper_url2;
    if (this.emptybox1.length != 1 || this.emptybox2.length != 1) {
        document.getElementById("popupreminder")!.innerHTML = this.popUpText;
    }else{
      let str: string;
      if(this.emptybox1[0]=="PAPER1"){
        str = this.paper_url1;
      }else{
        str= this.paper_url2;
      }
      const words = str.split("/")[3].split(".");
      const paperLogo = words[0];
      this.dataService.setPaperName1(pName1.split("/")[3].split("."));
      this.dataService.setPaperName2(pName2.split("/")[3].split("."));
      if(this.paperName_1== paperLogo){
        this.dataService.setResult(true);
        this.router.navigate(['../../resultspage']);
      }else{
        this.dataService.setResult(false);
        this.router.navigate(['../../resultspage']);
      }
    }
  }

  retrieveData() {
    this.dataService.getCovid().subscribe(
      data => {
        this.tweet=data;
        const num = Math.random() % 2;
        const point5 = 0.5;
        this.headline_1 = this.tweet[0].text;
        this.headline_2 = this.tweet[1].text;
        this.paperName_1 = this.tweet[0].paper;
        if(num < point5){
          this.paper_url1  = this.paper_image_dict[this.tweet[0].paper];
          this.paper_url2 = this.paper_image_dict[this.tweet[1].paper];
          
        }else{
          this.paper_url1  = this.paper_image_dict[this.tweet[1].paper];
          this.paper_url2 = this.paper_image_dict[this.tweet[0].paper];
        }
      },
      error => {
        console.log(error);
      }
    );
    this.dataService.get_paper_stats('Guardian','TheSun').subscribe(
      data=>{
        this.test = data;
        console.log(this.test[0].paper);
        console.log(this.test[1].paper);
      },error=>{
        console.log(error);
      }
    )
  }
}
