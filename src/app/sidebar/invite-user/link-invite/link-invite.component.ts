import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-invite',
  templateUrl: './link-invite.component.html',
  styleUrls: ['./link-invite.component.css']
})
export class LinkInviteComponent implements OnInit {

  value:any='http://www.example.org/bomb?boy=breath&act=apparatus'
  constructor() { }

  ngOnInit(): void {
  }

}
