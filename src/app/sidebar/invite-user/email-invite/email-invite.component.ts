import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-invite',
  templateUrl: './email-invite.component.html',
  styleUrls: ['./email-invite.component.css']
})
export class EmailInviteComponent implements OnInit {

  value:any='http://www.example.org/bomb?boy=breath&act=apparatus'
  constructor() { }

  ngOnInit(): void {
  }

}
