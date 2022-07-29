import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FyloStoreComponent } from './fylo-store.component';

describe('FyloStoreComponent', () => {
  let component: FyloStoreComponent;
  let fixture: ComponentFixture<FyloStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FyloStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FyloStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
