import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  back:any
  constructor(private Service :AppService) { }
  getColor(){
    this.Service.backGround().subscribe(item=>{ 
    })
  }
  ngOnInit(): void {
  }

}
