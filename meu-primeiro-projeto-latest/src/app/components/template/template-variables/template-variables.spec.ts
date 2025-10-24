import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariables } from './template-variables';

describe('TemplateVariables', () => {
  let component: TemplateVariables;
  let fixture: ComponentFixture<TemplateVariables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateVariables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateVariables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
