import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFrameworksComponent } from './js-frameworks.component';

describe('JsFrameworksComponent', () => {
  let component: JsFrameworksComponent;
  let fixture: ComponentFixture<JsFrameworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsFrameworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
