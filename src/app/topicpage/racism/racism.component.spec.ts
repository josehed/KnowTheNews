import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacismComponent } from './racism.component';

describe('RacismComponent', () => {
  let component: RacismComponent;
  let fixture: ComponentFixture<RacismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
