import { Component, computed, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { WizardCardComponent } from "../../components/wizard-card/wizard-card.component";
import { WizardsService } from 'src/app/services/wizards.service';

@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.page.html',
  styleUrls: ['./wizards.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, WizardCardComponent, IonSearchbar]
})
export class WizardsPage implements OnInit {

  wizards = this.wizardsService.wizardsSignal;
  searchInput = signal<string>('');

  constructor(private wizardsService: WizardsService) {}

  ngOnInit() {
    this.wizardsService.fetchWizards();
  }

  filteredWizards = computed(() =>
    this.wizards().filter(wizards =>
      wizards.name.toLowerCase().includes(this.searchInput().toLowerCase())
    )
  );
}
