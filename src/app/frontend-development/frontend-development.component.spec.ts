import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendDevelopmentComponent } from './frontend-development.component';

describe('FrontendDevelopmentComponent', () => {
  let component: FrontendDevelopmentComponent;
  let fixture: ComponentFixture<FrontendDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
