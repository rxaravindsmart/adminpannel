import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-jwell',
  templateUrl: './jwell.component.html',
  styleUrls: ['./jwell.component.css']
})
export class JwellComponent implements OnInit {
  items:any=[]
  // items=[
  //   {img_path:'../assets/collection/jwell/jwell1.png',title:'Bracelet',cost:'21'},
  //   {img_path:'../assets/collection/jwell/jwell2.png',title:'Bangles ',cost:'14'},
  //   {img_path:'../assets/collection/jwell/jwell3.png',title:'Nacklace ',cost:'23'},
  //   {img_path:'../assets/collection/jwell/jwell4.png',title:'Nacklace & Ear rings',cost:'25'},
  // ]

  constructor(private CollectionService:CollectionService) { }

  getJwellery(){
    this.CollectionService.getJwellary().subscribe(res=>{
      this.items=res
      console.log(this.items);

    })
  }
  ngOnInit(): void {
    this.getJwellery()
  }

}
