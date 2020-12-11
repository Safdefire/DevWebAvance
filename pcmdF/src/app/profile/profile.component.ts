import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  information ;
  loginUser : string="";
  statutUser : string="";
  constructor() { }

  ngOnInit(): void {
    //console.log(history.state);
    this.information = history.state;
    console.log(this.information);
    this.loginUser = history.state.loginUSER;
    console.log(this.loginUser);
    this.statutUser = history.state.statutUSER;
    console.log(this.statutUser);
  }

}
