import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-resultspage',
  templateUrl: './resultspage.component.html',
  styleUrls: ['./resultspage.component.css']
})
export class ResultspageComponent implements OnInit {

  public pieChartLabels1 = ['Correct', 'Incorrect'];
  public pieChartData1 = [5, 10];
  public pieChartType1 = 'pie';
  public pieChartLabels2 = ['Correct', 'Incorrect'];
  public pieChartData2 = [5, 10];
  public pieChartType2 = 'pie';
  paper_dict: { [key:string]:string } = {
    DailyMailUK: 'The Daily Mail UK',
    FT:'Financial Times',
    Guardian:'The Guardian',
    Telegraph:'The Telegraph',
    TheSun:'The Sun'
  };

  pName1: any;
  pName2: any;
  paperInfo: any;
  result:any;
  backgroundUrl = '../assets/homepage.jpeg'
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.pName1 = this.dataService.getPaperName1();
    this.pName2 = this.dataService.getPaperName2();
    this.result = this.dataService.getResult();
    if(this.result == true){
      this.dataService.update_paper_correct(this.pName1).subscribe(
          data => {
              console.log(data);
          }, error => {
             console.log(error);
           }
      );
      this.dataService.update_paper_correct(this.pName2).subscribe(
          data => {
              console.log(data);
          }, error => {
             console.log(error);
           }
      );
      this.dataService.get_paper_stats(this.pName1, this.pName2).subscribe(
        data => {
          this.paperInfo = data;
          this.pieChartData1 = [this.paperInfo[0].correct_answers, this.paperInfo[0].incorrect_answers];
          this.pieChartData2 = [this.paperInfo[1].correct_answers, this.paperInfo[1].incorrect_answers];
        },
        error => {
          console.log(error);
        }
      );
      document.getElementById("answer")!.innerHTML = "Correct!!!"
    }else if(this.result == false){
      this.dataService.update_paper_incorrect(this.pName1).subscribe(
          data => {
              console.log(data);
          }, error => {
             console.log(error);
           }
      );
      this.dataService.update_paper_incorrect(this.pName2).subscribe(
          data => {
              console.log(data);
          }, error => {
             console.log(error);
           }
      );
      this.dataService.get_paper_stats(this.pName1, this.pName2).subscribe(
        data => {
          this.paperInfo = data;
          this.pieChartData1 = [this.paperInfo[0].correct_answers, this.paperInfo[0].incorrect_answers];
          this.pieChartData2 = [this.paperInfo[1].correct_answers, this.paperInfo[1].incorrect_answers];
        },
        error => {
          console.log(error);
        }
      );

      document.getElementById("answer")!.innerHTML = "Wrong"
    }
    document.getElementById("PAPER1")!.innerHTML = this.paper_dict[this.pName1];
    document.getElementById("PAPER2")!.innerHTML = this.paper_dict[this.pName2];
    console.log("the thing works")
  }
}
