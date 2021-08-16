import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { TopicPageRoutingModule } from './topicpage-routing.module';
import { TopicPageComponent } from './topicpage.component';

@NgModule({
  imports: [
    CommonModule,
    TopicPageRoutingModule,
    DragDropModule
  ],
  declarations: [
    TopicPageComponent
  ]
})

export class TopicPageModule {}
