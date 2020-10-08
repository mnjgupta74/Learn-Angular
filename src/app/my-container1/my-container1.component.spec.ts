import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContainer1Component } from './my-container1.component';

describe('MyContainer1Component', () => {
  let component: MyContainer1Component;
  let fixture: ComponentFixture<MyContainer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyContainer1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContainer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
