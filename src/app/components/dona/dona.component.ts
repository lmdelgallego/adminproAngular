import { Component, Input, OnInit } from '@angular/core';
import { Color, ChartData, ChartDataset } from 'chart.js';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css'],
})
export class DonaComponent implements OnInit {
  @Input() title: string = '';
  @Input('labels') doughnutChartLabels: string[] = [];
  @Input('values') doughnutChartData: { data: number[]; label?: string }[] = [];
  @Input('type') doughnutChartType: ChartType = 'doughnut';

  public dataChart: ChartData<'doughnut', number[]> = {
    labels: this.doughnutChartLabels,
    datasets: this.doughnutChartData,
  };

  ngOnInit(): void {
    this.dataChart = {
      labels: this.doughnutChartLabels,
      datasets: [...this.doughnutChartData],
    };
  }

  public colors: Color[] = [
    // {backgroundColor: ['#6857E6', '#009FEE', '#F02059']}
  ];

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
