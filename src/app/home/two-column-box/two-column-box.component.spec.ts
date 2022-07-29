import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnBoxComponent } from './two-column-box.component';

describe('TwoColumnBoxComponent', () => {
  let component: TwoColumnBoxComponent;
  let fixture: ComponentFixture<TwoColumnBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColumnBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
