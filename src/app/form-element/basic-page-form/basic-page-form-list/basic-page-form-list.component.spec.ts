import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPageFormListComponent } from './basic-page-form-list.component';

describe('BasicPageFormListComponent', () => {
  let component: BasicPageFormListComponent;
  let fixture: ComponentFixture<BasicPageFormListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicPageFormListComponent]
    });
    fixture = TestBed.createComponent(BasicPageFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
