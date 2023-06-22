import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyForunsComponent } from './my-foruns.component';

describe('MyForunsComponent', () => {
  let component: MyForunsComponent;
  let fixture: ComponentFixture<MyForunsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyForunsComponent]
    });
    fixture = TestBed.createComponent(MyForunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
