import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WMachineComponent } from './w-machine.component';

describe('WMachineComponent', () => {
  let component: WMachineComponent;
  let fixture: ComponentFixture<WMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
