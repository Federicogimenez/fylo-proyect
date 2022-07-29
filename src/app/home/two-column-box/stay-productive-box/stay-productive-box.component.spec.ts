import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayProductiveBoxComponent } from './stay-productive-box.component';

describe('StayProductiveBoxComponent', () => {
  let component: StayProductiveBoxComponent;
  let fixture: ComponentFixture<StayProductiveBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayProductiveBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StayProductiveBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
