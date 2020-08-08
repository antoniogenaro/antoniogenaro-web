import { Component, OnInit, Input } from '@angular/core';
import { Bio } from '../app.models';

@Component({
  selector: 'gen-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  @Input() bio: Bio;

  constructor() { }

  ngOnInit(): void {
  }

}
