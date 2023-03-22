import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRouteComponent } from './dashboard-route.component';

describe('DashboardRouteComponent', () => {
  let component: DashboardRouteComponent;
  let fixture: ComponentFixture<DashboardRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
