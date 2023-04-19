import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbusinessComponent } from './footerbusiness.component';

describe('FooterbusinessComponent', () => {
  let component: FooterbusinessComponent;
  let fixture: ComponentFixture<FooterbusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterbusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
