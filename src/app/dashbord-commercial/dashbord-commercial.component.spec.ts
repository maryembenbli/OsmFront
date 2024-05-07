import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordCommercialComponent } from './dashbord-commercial.component';

describe('DashbordCommercialComponent', () => {
  let component: DashbordCommercialComponent;
  let fixture: ComponentFixture<DashbordCommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordCommercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
