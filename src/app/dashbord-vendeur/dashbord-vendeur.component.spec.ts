import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordVendeurComponent } from './dashbord-vendeur.component';

describe('DashbordVendeurComponent', () => {
  let component: DashbordVendeurComponent;
  let fixture: ComponentFixture<DashbordVendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbordVendeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
