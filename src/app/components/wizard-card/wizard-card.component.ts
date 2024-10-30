import { Component, input } from '@angular/core';
import { Wizard } from "../../models/wizard";
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard-card',
  templateUrl: './wizard-card.component.html',
  styleUrls: ['./wizard-card.component.scss'],
  standalone: true,

})
export class WizardCardComponent  {

  wizard = input.required<Wizard>();

  constructor(private router: Router) { }

  goToWizardDetails(wizard : any){
    this.router.navigate(['/wizard-details', wizard.id]);
  }

  ////////////////////////////////////////////////////////////////
  // Formating the alternative names
  ////////////////////////////////////////////////////////////////
  formatAlternateNames(alternate_names: string): string {
    if (!Array.isArray(alternate_names) || alternate_names.length === 0) {
      return '';
    }
    return alternate_names.map(name => name.trim()).join(' · ');
  }
}
