import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-observe-users',
  templateUrl: './observe-users.component.html',
  styleUrls: ['./observe-users.component.css']
})
export class ObserveUsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'date of birth','user type'];
  dataSource = [{id: 1, name: 'proba', surname: "proba", email: 'proba', dateOfBirth: "1997-04-21T00:00:00", userType: 0}];
  id: any = "";

  constructor() { }

  ngOnInit(): void {
    /*this.userService.GetAllUsers().subscribe((data: any)=>{
    this.dataSource = data;
  }*/

  }
}