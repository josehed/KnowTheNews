import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomescreenComponent} from './homescreen/homescreen.component';
import {ResultspageComponent} from './resultspage/resultspage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'homepage', component: HomescreenComponent},
  {
    path: 'topicpage',
    loadChildren: () => import('./topicpage/topicpage.module').then(m => m.TopicPageModule)
  },
  {path: 'resultspage', component: ResultspageComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
