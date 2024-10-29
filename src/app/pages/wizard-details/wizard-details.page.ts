import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-wizard-details',
  templateUrl: './wizard-details.page.html',
  styleUrls: ['./wizard-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WizardDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
