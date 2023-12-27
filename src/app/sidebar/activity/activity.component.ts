import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  dummy:any=[
    {high:'#Day 04 of Design',imp:'12000'},
    {high:'#Day 11 of Design',imp:'81271'},
    {high:'#Day 02 of Design',imp:'19400'},
    {high:'#Day 26 of Design',imp:'92000'},
    {high:'#Day 21 of Design',imp:'18300'},
    {high:'#Day 12 of Design',imp:'63000'},
  ]
  months:any=[
    {mon:'Jan'},
    {mon:'Feb'},
    {mon:'Mar'},
    {mon:'Apr'},
    {mon:'May'},
    {mon:'Jun'},
    {mon:'Jul'},
    {mon:'Aug'},
    {mon:'Sep'},
    {mon:'Oct'},
    {mon:'Nov'},
    {mon:'Dec'},
  ]
  lists:any=[
    {path:'../assets/user2.jpeg',name:'Rosee leslie',fol:'1,830',follower:'7,463'},
    {path:'../assets/inter/inter.jpg',name:'Rose',fol:'1,530',follower:'1,463'},
    {path:'../assets/user2.jpeg',name:'Pink Lubs',fol:'830',follower:'8,163'},
    {path:'../assets/user.jpg',name:'Adam brook',fol:'1,700',follower:'4,263'},
    {path:'../assets/inter/inter.jpg',name:'Rose',fol:'300',follower:'523'},
    {path:'../assets/user2.jpeg',name:'Strong Lug',fol:'960',follower:'6,125'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
