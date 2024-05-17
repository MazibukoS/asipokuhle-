import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenturesComponent } from './ventures.component';

describe('VenturesComponent', () => {
  let component: VenturesComponent;
  let fixture: ComponentFixture<VenturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
