import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-main-dash',
  templateUrl: './dash-main-dash.component.html',
  styleUrls: ['./dash-main-dash.component.css']
})
export class DashMainDashComponent implements OnInit {

  public value=[
    {id:1,views: 239,
    image: '../assets/cat.jpg',
    val: false
    },
    {id:2,views: 231,
      image: '../assets/dog.jpeg',
      val: false
    },
    {id:3,views: 210,
      image: '../assets/cat.jpg',
      val: false
    },
    {id:4,views: 541,
      image: '../assets/dog.jpeg',
      val: false
    },
    {id:5,views: 331,
      image: '../assets/cat.jpg',
      val: false
    }
  ]

  private currentSlide = 0;
  constructor() { }
  next(){
    console.log('next');
  }
  prev(){
    console.log('prev');
  }
  additem(index:any){
    this.value[index].val =false
  }
  removeitem(index:any){
    this.value[index].val = true
  }
  ngOnInit(): void {
  }

}
