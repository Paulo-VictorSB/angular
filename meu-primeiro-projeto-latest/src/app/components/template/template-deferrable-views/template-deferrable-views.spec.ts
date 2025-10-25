import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDeferrableViews } from './template-deferrable-views';

describe('TemplateDeferrableViews', () => {
  let component: TemplateDeferrableViews;
  let fixture: ComponentFixture<TemplateDeferrableViews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDeferrableViews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDeferrableViews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
