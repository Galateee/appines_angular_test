import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wizard } from '../models/wizard';

@Injectable({
  providedIn: 'root'
})
export class WizardsService {
  private wizards = signal<Wizard[]>([]);

  constructor(private http:HttpClient) { 
    this.fetchWizards();
  }

  fetchWizards() {
    this.http.get<Wizard[]>('https://hp-api.onrender.com/api/characters').subscribe((res) => {
      this.wizards.set(res);
    })
  }

  get wizardsSignal() {
    return this.wizards;
  }
}
