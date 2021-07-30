import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/animal';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  lists: List[];
  constructor() { 
    this.lists =[
      {
        name: "TIGER",
        link: "/"
      },
      {
        name: "LION",
        link: "#"
      },
      {
        name: "CHEETAH",
        link: "#"
      },
      {
        name: "LEOPARD",
        link: "#"
      },
    ]
  }

  ngOnInit(): void {
  }

}
