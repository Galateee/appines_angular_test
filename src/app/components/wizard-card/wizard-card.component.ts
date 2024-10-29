import { Component, Input } from '@angular/core';
import {Wizard} from "../../models/wizard";
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard-card',
  templateUrl: './wizard-card.component.html',
  styleUrls: ['./wizard-card.component.scss'],
  standalone: true,

})
export class WizardCardComponent  {

  // TODO : migrate with new input signal
  @Input({ required: true }) wizard!: Wizard;

  constructor(private router: Router) { }

  goToWizardDetails(wizard : any){
    this.router.navigate(['/wizard-details', wizard.id]);
  }

}
