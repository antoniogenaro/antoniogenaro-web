import { Component, Input } from '@angular/core';
import { Experience } from '../app.models';

@Component({
  selector: 'gen-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
  @Input() experiences: Experience[];
}
