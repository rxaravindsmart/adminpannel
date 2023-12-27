import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shippment',
  templateUrl: './shippment.component.html',
  styleUrls: ['./shippment.component.css']
})
export class ShippmentComponent implements OnInit {
  value:any=[]
  shipment=[
    {id:'#1124',src:'../assets/Products/eye.jpg',Name:'Eye Linear',Address:'308 Snider Street,Raj Bhavan',Date:" 15 Nov",price:'45.00',fname:'Albert',status:'Delivered'},
    {id:'#5142',src:'../assets/Products/fog.jpg',Name:'Fog Cent',Address:'318 Snider Street,Raj Bhavan',Date:" 18 Dec",price:'95.00',fname:'Robert Gill',status:'Delivered'},
    {id:'#1426',src:'../assets/Products/lip.jpg',Name:'Lip Balm',Address:'38 Snider Street,Raj Bhavan',Date:" 31 Aug",price:'65.00',fname:'Goladrial',status:'Delivered'},
    {id:'#5262',src:'../assets/Products/hair.jpg',Name:'Hair Colour',Address:'08 Snider Street,Raj Bhavan',Date:" 29 Sep",price:'48.00',fname:'Sawvran',status:'Delivered'},
  ]
  constructor() { }

  onclick(i:any){
    this.value[i].val = true

  }
  ngOnInit(): void {
    for(let i=0;i<this.shipment.length;i++){
      const val={val: false}
        this.value.push(val)
    }

  }

}
