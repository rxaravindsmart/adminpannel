import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  value:any
  plan:any
  billing=[
    {id:1,title:'Basic ',cost:'10',plan:'Current',bgcolor:'#d1c7c7'},
    {id:2,title:'Growth ',cost:'20',plan:'Upgrade',bgcolor:'#daede0'},
    {id:3,title:'Scale ',cost:'30',plan:'Upgrade',bgcolor:'#f4f7cb'},
    {id:4,title:'Enterprise',cost:'40',plan:'Upgrade',bgcolor:'#faf4d9'}
  ]

  constructor() { }
  onClick(i:any){
  this.value=this.billing[i].cost
  this.plan=this.billing[i].title
  }
  ngOnInit(): void {
  }

}
