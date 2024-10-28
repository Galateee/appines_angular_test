import { Component, Input } from '@angular/core';
import {Wizard} from "../../models/wizard";

@Component({
  selector: 'app-wizard-card',
  templateUrl: './wizard-card.component.html',
  styleUrls: ['./wizard-card.component.scss'],
  standalone: true,

})
export class WizardCardComponent  {

  // TODO : migrate with new input signal
  @Input({ required: true }) wizard!: Wizard;

  constructor() { }

}
