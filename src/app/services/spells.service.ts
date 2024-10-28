import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spell } from '../models/spell';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  private spells = signal<Spell[]>([]);

  constructor(private http:HttpClient) { 
    this.fetchSpells();
  }

  fetchSpells() {
    this.http.get<Spell[]>('https://hp-api.onrender.com/api/spells').subscribe((res) => {
      this.spells.set(res);
    })
  }

  get spellsSignal() {
    return this.spells;
  }
}
