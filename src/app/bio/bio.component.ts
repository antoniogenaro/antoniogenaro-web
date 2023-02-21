import { Component, Input } from '@angular/core';
import { Bio } from '../app.models';

@Component({
  selector: 'gen-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent {
  @Input() bio: Bio;
}
