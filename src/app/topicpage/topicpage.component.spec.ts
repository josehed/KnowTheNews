import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPageComponent } from './topicpage.component';

describe('TopicpageComponent', () => {
  let component: TopicPageComponent;
  let fixture: ComponentFixture<TopicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
