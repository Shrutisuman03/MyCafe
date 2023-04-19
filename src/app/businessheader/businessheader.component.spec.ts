import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessheaderComponent } from './businessheader.component';

describe('BusinessheaderComponent', () => {
  let component: BusinessheaderComponent;
  let fixture: ComponentFixture<BusinessheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
