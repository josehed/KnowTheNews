import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private result:any;
  private paperName1:String = "";
  private paperName2:String = "";
  private REST_API_SERVER_POLITICS = "http://localhost:3000/api/politics";
  private REST_API_SERVER_BREXIT = "http://localhost:3000/api/brexit";

  private REST_API_SERVER_AMERICA = "http://localhost:3000/api/america";
  private REST_API_SERVER_BORIS = "http://localhost:3000/api/boris";

  private REST_API_SERVER_CLIMATE = "http://localhost:3000/api/climate";
  private REST_API_SERVER_COVID = "http://localhost:3000/api/covid";
  private REST_API_SERVER_MILITARY = "http://localhost:3000/api/military";
  private REST_API_SERVER_RACISM = "http://localhost:3000/api/racism";

  private REST_API_SERVER_UPDATE_CORRECT = "http://localhost:3000/api/correct";
  private REST_API_SERVER_UPDATE_INCORRECT = "http://localhost:3000/api/incorrect";
  private REST_API_SERVER_PAPER_INFO = "http://localhost:3000/api/newssources";

  constructor(private httpClient: HttpClient) { }

  public getPolitics(){
    return this.httpClient.get(this.REST_API_SERVER_POLITICS)
  }

  public getBrexit(){
      return this.httpClient.get(this.REST_API_SERVER_BREXIT)
  }
  
  public getAmerica(){
    return this.httpClient.get(this.REST_API_SERVER_AMERICA)
  }
  
  public getBoris(){
      return this.httpClient.get(this.REST_API_SERVER_BORIS)
  }
  
  public getClimate(){
    return this.httpClient.get(this.REST_API_SERVER_CLIMATE)
  }
  
  public getCovid(){
      return this.httpClient.get(this.REST_API_SERVER_COVID)
  }
  
  public getMilitary(){
    return this.httpClient.get(this.REST_API_SERVER_MILITARY)
  }
  
  public getRacism(){
      return this.httpClient.get(this.REST_API_SERVER_RACISM)
  }

  public update_paper_correct(newspaper: string){
    let params = new HttpParams();
    params = params.append('paper', newspaper);
    return this.httpClient.get(this.REST_API_SERVER_UPDATE_CORRECT,{params: params});
  }
  public update_paper_incorrect(newspaper: string){
      let params = new HttpParams();
      params = params.append('paper', newspaper);
      return this.httpClient.get(this.REST_API_SERVER_UPDATE_INCORRECT,{params: params});
  }

  public get_paper_stats(newspaper1: string,newspaper2:string){
      let params = new HttpParams();
      params = params.append('paper1', newspaper1);
      params = params.append('paper2', newspaper2);
      return this.httpClient.get(this.REST_API_SERVER_PAPER_INFO,{params: params});
  }

  public setResult(result: any){
    this.result = result;
  }

  public getResult(){
    return this.result;
  }

  public setPaperName1(paperName: any){
    this.paperName1 = paperName;
  }

  public getPaperName1(){
    return this.paperName1[0];
  }

  public setPaperName2(paperName: any){
    this.paperName2 = paperName;
  }
  
  public getPaperName2(){
    return this.paperName2[0];
  }
}
