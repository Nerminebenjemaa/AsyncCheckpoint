import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OberservableComponent } from './oberservable.component';

describe('OberservableComponent', () => {
  let component: OberservableComponent;
  let fixture: ComponentFixture<OberservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OberservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OberservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
