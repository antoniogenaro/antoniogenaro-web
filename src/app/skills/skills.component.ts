import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Skill, SkillsGrouping } from '../app.models';

@Component({
  selector: 'gen-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit {
  @Input() skills: SkillsGrouping[];

  maxValue = 5;
  valuesSeparator: any[];

  constructor() { }

  ngOnInit(): void {
    this.generateValuesSeparator();
  }

  getValuePercent(skill: Skill) {
    return skill.value / this.maxValue * 100;
  }

  generateValuesSeparator() {
    this.valuesSeparator = new Array(this.maxValue);
    console.log(this.valuesSeparator);
  }

}
