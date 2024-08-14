import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFunctionsComponent } from './group-functions.component';

describe('GroupFunctionsComponent', () => {
  let component: GroupFunctionsComponent;
  let fixture: ComponentFixture<GroupFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupFunctionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
