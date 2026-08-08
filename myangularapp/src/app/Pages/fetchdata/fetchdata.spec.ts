import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fetchdata } from './fetchdata';

describe('Fetchdata', () => {
  let component: Fetchdata;
  let fixture: ComponentFixture<Fetchdata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fetchdata],
    }).compileComponents();

    fixture = TestBed.createComponent(Fetchdata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
