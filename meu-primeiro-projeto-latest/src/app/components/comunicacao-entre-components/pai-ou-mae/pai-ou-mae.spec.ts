import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiOuMae } from './pai-ou-mae';

describe('PaiOuMae', () => {
  let component: PaiOuMae;
  let fixture: ComponentFixture<PaiOuMae>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaiOuMae]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiOuMae);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
