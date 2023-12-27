import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  display_item:any='none'
  constructor() { }

  ngOnInit(): void {
  }
  addItem(){
    this.display_item='block'
    console.log(this.display_item);
  }
  cancel(){
    this.display_item='none'
  }
  addrow(){

  }
  onSubmit(){

  }
}
