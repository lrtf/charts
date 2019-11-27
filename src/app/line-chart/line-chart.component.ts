import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  lineChartData = [
    {
      data: [85, 72, 78, 75, 77, 75],
      label: 'Crude oil prices',
      borderColor:'rgb(75, 192, 192)',
      fill: false
    },
    {
      data: [40, 67, 68, 85, 67, 90],
      label: 'Crude oil prices',
      borderColor:'rgb(7, 145, 1452)',
      fill: false
    }
  ];
  lineChartLabels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
  lineChartType = 'line';

  lineChartLegend = true;

  constructor() { }

  ngOnInit() {
  }

}
