import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateControlFlow } from './template-control-flow';

describe('TemplateControlFlow', () => {
  let component: TemplateControlFlow;
  let fixture: ComponentFixture<TemplateControlFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateControlFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateControlFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
