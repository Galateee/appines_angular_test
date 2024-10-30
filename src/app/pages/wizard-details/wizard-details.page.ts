import { Component, OnInit, signal } from '@angular/core';
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
  wizard = signal<Wizard | null>(null);
  
  constructor(private route: ActivatedRoute, private wizardsService: WizardsService) { 
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
      const transformedData = this.transformWizardData(data);
      this.wizard.set(transformedData);
      console.log('Wizard data:', transformedData);
    });
  }

  ////////////////////////////////////////////////////////////////
  // Transform the first letter to UPPERCASE
  ////////////////////////////////////////////////////////////////
  private transformWizardData(wizard: Wizard): Wizard {
    return JSON.parse(
      JSON.stringify(wizard, (key, value) =>
        typeof value === 'string' && key !== 'image' && key !== 'id' 
          ? value.replace(/\b\w/g, (char) => char.toUpperCase()) 
          : value
      )
    );
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
  

  ////////////////////////////////////////////////////////////////
  // Formating the date
  ////////////////////////////////////////////////////////////////
  formatDate(dateString: string | null): string {
    if (!dateString) {
      return '-';
    }
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const [day, month, year] = dateString.split('-');
    const monthIndex = parseInt(month, 10) - 1;
    const suffix = this.getDateSuffix(parseInt(day, 10));
    return `${months[monthIndex]} ${day}${suffix} ${year}`;
  }

  private getDateSuffix(day: number): string {
    if (day >= 11 && day <= 13) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }
}