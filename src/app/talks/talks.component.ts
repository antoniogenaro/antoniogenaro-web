import { Component, Input } from '@angular/core';
import { Talk } from '../app.models';

@Component({
  selector: 'gen-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss'],
})
export class TalksComponent {
  @Input() talks: Talk[];
}
