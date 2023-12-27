import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-order',
  templateUrl: './t-order.component.html',
  styleUrls: ['./t-order.component.css']
})
export class TOrderComponent implements OnInit {
  value:any=[]
  id:any
  border_b='10px solid grey'
  orderItems=[
    {src:'../assets/Products/ear.jpg',src_one:'../assets/Products/ear1.jpeg',src_two:'../assets/Products/ear2.jpeg',id:'#917928',Name:'Ear Ring',Cus_name:'John Bradly',price:'126',quantity:'2',address:'12/b st.Joseph cbe 101 921'},
    {src:'../assets/Products/eye1.jpg',src_one:'../assets/Products/eye2.jpeg',src_two:'../assets/Products/eye3.jpeg',id:'#911928',Name:'Eye Liner ',Cus_name:'Cristian Role',price:'106',quantity:'4',address:'12/b st.Joseph cbe 101 921'},
    {src:'../assets/Products/hair.jpg',src_one:'../assets/Products/hair1.jpg',src_two:'../assets/Products/hair2.jpg',id:'#127921',Name:'Hair Colour',Cus_name:'Mixandi Rose',price:'98',quantity:'10',address:'12/b st.Joseph cbe 101 921'},
    {src:'../assets/Products/neck.jpg',src_one:'../assets/Products/neck1.jpeg',src_two:'../assets/Products/neck2.jpeg',id:'#017228',Name:'Necklace',Cus_name:'Zaya Zendaiya',price:'88',quantity:'1',address:'12/b st.Joseph cbe 101 921'}
  ]
  constructor() { }
  onclick(i:any){
    this.id=i
    this.value[i].val = true
    this.border_b='5px solid blue'
  }
  loopMethod(){
    for(let i=0;i<this.orderItems.length;i++){
      const val={val: false}
        this.value.push(val)
    }
  }
  ngOnInit(): void {
this.loopMethod()
  }


}
