import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bio, Experience, Network, SkillsGrouping, Talk } from './app.models';
import { AppService } from './app.service';

@Component({
  selector: 'gen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  bio$: Observable<Bio>;
  skills$: Observable<SkillsGrouping[]>;
  experiences$: Observable<Experience[]>;
  networks$: Observable<Network[]>;
  talks$: Observable<Talk[]>;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.bio$ = this.appService.getBio();
    this.skills$ = this.appService.getSkills();
    this.experiences$ = this.appService.getExperiences();
    this.networks$ = this.appService.getNetworks();
    this.talks$ = this.appService.getTalks();
  }
}
