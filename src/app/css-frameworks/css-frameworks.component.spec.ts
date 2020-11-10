import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssFrameworksComponent } from './css-frameworks.component';

describe('CssFrameworksComponent', () => {
  let component: CssFrameworksComponent;
  let fixture: ComponentFixture<CssFrameworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssFrameworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
