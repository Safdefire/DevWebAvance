import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() buttonText: string;
  @Input() login_user: string = "";
  @Input() statut_user: string = "";
  loginUser: String = '';
  selectedMenu: String = '';
  isActiveMenu: boolean;
  rendu:string="";

  activeMenu() {
    this.isActiveMenu = true;
  }
  constructor(private router: ActivatedRoute) {
    let login = this.router.snapshot.paramMap.get('idLogin');
    this.loginUser = login;
    
  }

  ngOnInit(): void {
    console.log(this.loginUser);
    if(this.statut_user == "E")
      {
        this.rendu="profile";
      }
    else
    {
      this.rendu="ajouterMobilite";
    }
  }

}
