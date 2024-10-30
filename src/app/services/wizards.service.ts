import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wizard } from '../models/wizard';
import { map, Observable } from 'rxjs';

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

  getWizardById(id: string): Observable<Wizard> {
    return this.http.get<Wizard[]>(`${'https://hp-api.onrender.com/api/character'}/${id}`).pipe(
      map(wizards => wizards[0])
    );
  }

  get wizardsSignal() {
    return this.wizards;
  }
}
