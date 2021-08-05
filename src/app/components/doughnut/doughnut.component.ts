import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent implements OnInit {
  @Input() title:string="title"
  @Input() doughnutChartLabels: string[] =['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() values:number[] =[1,2,3]
  public doughnutChartData: number[] = [

  ];
  public colors:Color[] = [
    {backgroundColor:['#9E120E',"#FF5800","#FFB414"]}

  ]
  constructor() { }

  ngOnInit(): void {
    this.doughnutChartData=this.values
  }

}
