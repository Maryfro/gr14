import {Component, OnInit} from '@angular/core';
import {StatisticsService} from "../../service/statisticservice.service";
import {Statistic} from "../../model/statistic";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.css']
})
export class StatisticPageComponent implements OnInit {

  statistics: Statistic[] | undefined;

  constructor(private statisticsService: StatisticsService) {
  }

  ngOnInit(): void {
    this.statisticsService.getStatistics()
      .subscribe(value => this.callBackOk(value),
        error => this.errorHandle(error));
  }

  private callBackOk(value: Statistic[]): void {
    this.statistics = value;
  }

  private errorHandle(error: HttpErrorResponse): void {
    console.log(error);
    alert(error)
  }
}
