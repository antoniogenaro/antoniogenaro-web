import { Component, OnInit, Input } from '@angular/core';
import { Network } from '../app.models';

@Component({
  selector: 'gen-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.scss']
})
export class NetworksComponent implements OnInit {
  @Input() networks: Network[];

  constructor() { }

  ngOnInit(): void {
  }

}
