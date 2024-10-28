import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar, IonItem } from '@ionic/angular/standalone';
import {SpellCardComponent} from "../../components/spell-card/spell-card.component";
import { SpellsService } from 'src/app/services/spells.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.page.html',
  styleUrls: ['./spells.page.scss'],
  standalone: true,
  imports: [IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SpellCardComponent, IonSearchbar]
})
export class SpellsPage {

  spells = this.spellsService.spellsSignal;

  searchInput = signal<string>('');

  filteredSpells = computed(() =>
    this.spells().filter(spell =>
      spell.name.toLowerCase().includes(this.searchInput().toLowerCase())
    )
  );
  
  constructor(private spellsService: SpellsService) {}

}
