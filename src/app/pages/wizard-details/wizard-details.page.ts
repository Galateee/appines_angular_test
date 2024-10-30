import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import {Wizard} from "../../models/wizard";
import { WizardsService } from 'src/app/services/wizards.service';
import { addIcons } from 'ionicons';
import {chevronBackOutline} from 'ionicons/icons';

@Component({
  selector: 'app-wizard-details',
  templateUrl: './wizard-details.page.html',
  styleUrls: ['./wizard-details.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class WizardDetailsPage implements OnInit {
  wizard!: Wizard;
  
  constructor(
    private route: ActivatedRoute, 
    private wizardsService: WizardsService
  ) { 
    addIcons({chevronBackOutline, });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.getWizardDetails(id);
    }
  }

  getWizardDetails(id: string) {
    this.wizardsService.getWizardById(id).subscribe((data: Wizard) => {
      this.wizard = this.transformWizardData(data);
      console.log('Wizard data:',this.wizard);
    });
  }

  private transformWizardData(wizard: Wizard): Wizard {
    return JSON.parse(
      JSON.stringify(wizard, (key, value) =>
        typeof value === 'string' && key !== 'image' && key !== 'id' 
          ? value.replace(/\b\w/g, (char) => char.toUpperCase()) 
          : value
      )
    );
  }
  
}