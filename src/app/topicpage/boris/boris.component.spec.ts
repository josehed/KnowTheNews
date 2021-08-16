import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorisComponent } from './boris.component';

describe('BorisComponent', () => {
  let component: BorisComponent;
  let fixture: ComponentFixture<BorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
