import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  members=[
    {id:1,img:'../assets/team/member1.jpg',Name:'John Wick',role:'Administrator',color:'#d1d6ba'},
    {id:2,img:'../assets/team/member2.jpg',Name:'Emila Clarke',role :'HR',color:'#badee6'},
    {id:3,img:'../assets/team/member3.jpg',Name:'Dwayne Johnson',role:'Manager',color:'#d9bae6'},
    {id:4,img:'../assets/team/member4.jpg',Name: 'Sunil Chhetri',role:'CEO',color:'#e6e5ba'},
    {id:5,img:'../assets/team/member2.jpg',Name:'Emila Clarke',role :'HR',color:'#95b0c7'},
    {id:6,img:'../assets/team/member1.jpg',Name:'John Wick',role:'Administrator',color:'#a89eb5'},
    {id:7,img:'../assets/team/member3.jpg',Name:'Dwayne Johnson',role:'Manager',color:'#f5bad4'},
    {id:8,img:'../assets/team/member4.jpg',Name: 'Sunil Chhetri',role:'CEO',color:'#baf5c6'},
    {id:9,img:'../assets/team/member2.jpg',Name:'Emila Clarke',role :'HR',color:'#f5d7ba'},
    {id:10,img:'../assets/team/member2.jpg',Name: 'Sunil Chhetri',role:'CEO',color:'#e6e5ba'},
    {id:11,img:'../assets/team/member1.jpg',Name:'John Wick',role:'Administrator',color:'#d1d6ba'},
    {id:12,img:'../assets/team/member3.jpg',Name:'Dwayne Johnson',role:'Manager',color:'#9fc3e3'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
