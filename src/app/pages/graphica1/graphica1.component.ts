import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphica1',
  templateUrl: './graphica1.component.html',
  styles: [
  ]
})
export class Graphica1Component implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  title1="Sales"
  title2="Buys"
  title3="Sales representatibe"
  title4="Sales places"

  labels1:string[]=['Download sales','In-Store Sales','Mail Orders sales']
  labels2:string[]=['Download buys','In-Store buys','Mail Orders buys']
  labels3:string[]=['Amnt Download','Amount In-Store','Amount Mail Orders']
  labels4:string[]=['Online','In-Store ','Mail Orders ']
  values1:number[]=[12,2,4]
  values2:number[]=[11,2,4]
  values3:number[]=[1,21,4]
  values4:number[]=[1,22,4]
}
