import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WizardDetailsPage } from './wizard-details.page';

describe('WizardDetailsPage', () => {
  let component: WizardDetailsPage;
  let fixture: ComponentFixture<WizardDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
