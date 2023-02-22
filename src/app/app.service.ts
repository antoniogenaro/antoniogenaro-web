import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bio, Experience, Network, SkillsGrouping, Talk } from './app.models';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  endpoint = 'assets/data';

  constructor(private http: HttpClient) {}

  getBio(): Observable<Bio> {
    return this.http.get<Bio>(`${this.endpoint}/bio.json`);
  }

  getSkills(): Observable<SkillsGrouping[]> {
    return this.http.get<SkillsGrouping[]>(`${this.endpoint}/skills.json`);
  }

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.endpoint}/experience.json`);
  }

  getNetworks(): Observable<Network[]> {
    return this.http.get<Network[]>(`${this.endpoint}/networks.json`);
  }

  getTalks(): Observable<Talk[]> {
    return this.http.get<Talk[]>(`${this.endpoint}/talks.json`);
  }
}
