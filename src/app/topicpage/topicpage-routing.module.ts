import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopicPageComponent } from './topicpage.component';
import { BrexitComponent } from './brexit/brexit.component';
import { ClimateComponent } from './climate/climate.component';
import { PoliticsComponent } from './politics/politics.component';
import { CovidComponent } from './covid/covid.component';
import { AmericaComponent } from './america/america.component';
import { BorisComponent } from './boris/boris.component';
import { MilitaryComponent } from './military/military.component';
import { RacismComponent } from './racism/racism.component';

const topicRoutes: Routes = [
  { path: '', component: TopicPageComponent },
  {path: 'brexit', component: BrexitComponent},
  {path: 'climate', component: ClimateComponent},
  {path: 'politics', component: PoliticsComponent},
  {path: 'covid', component: CovidComponent},
  {path: 'america', component: AmericaComponent},
  {path: 'boris', component: BorisComponent},
  {path: 'military', component: MilitaryComponent},
  {path: 'racism', component: RacismComponent}
]

@NgModule({
    imports: [
      RouterModule.forChild(topicRoutes)
    ],
    exports: [
      RouterModule
    ]
  })

  export class TopicPageRoutingModule {}
