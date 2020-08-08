import { Component, OnInit, Input } from '@angular/core';
import { Experience } from '../app.models';

@Component({
  selector: 'gen-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() experiences: Experience[];

  constructor() { }

  ngOnInit(): void {
  }

}
