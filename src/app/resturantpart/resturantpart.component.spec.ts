import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantpartComponent } from './resturantpart.component';

describe('ResturantpartComponent', () => {
  let component: ResturantpartComponent;
  let fixture: ComponentFixture<ResturantpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantpartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResturantpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
