import {Component, Input} from '@angular/core';
import {Statistic} from "../../../model/statistic";

@Component({
  selector: 'app-statistic-item',
  templateUrl: './statistic-item.component.html',
  styleUrls: ['./statistic-item.component.css']
})
export class StatisticItemComponent {

  @Input()
  elt: Statistic | undefined;

  @Input()
  index: number = 0;
}
