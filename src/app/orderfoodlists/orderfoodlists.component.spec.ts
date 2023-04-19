import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderfoodlistsComponent } from './orderfoodlists.component';

describe('OrderfoodlistsComponent', () => {
  let component: OrderfoodlistsComponent;
  let fixture: ComponentFixture<OrderfoodlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderfoodlistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderfoodlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
