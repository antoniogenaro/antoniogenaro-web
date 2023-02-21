import { Component, Input } from '@angular/core';
import { Experience } from '../app.models';

@Component({
  selector: 'gen-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() experiences: Experience[];
}
