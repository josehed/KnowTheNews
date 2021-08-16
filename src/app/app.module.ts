import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DataService} from './data.service';

import {ChartsModule} from 'ng2-charts';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { ResultspageComponent } from './resultspage/resultspage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {BrexitComponent} from './topicpage/brexit/brexit.component';
import {ClimateComponent} from './topicpage/climate/climate.component';
import {PoliticsComponent} from './topicpage/politics/politics.component';
import {CovidComponent} from './topicpage/covid/covid.component';
import {AmericaComponent} from './topicpage/america/america.component';
import { BorisComponent } from './topicpage/boris/boris.component';
import { MilitaryComponent } from './topicpage/military/military.component';
import { RacismComponent } from './topicpage/racism/racism.component';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    ResultspageComponent,
    PageNotFoundComponent,
    BrexitComponent,
    ClimateComponent,
    PoliticsComponent,
    CovidComponent,
    AmericaComponent,
    BorisComponent,
    MilitaryComponent,
    RacismComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    DragDropModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
