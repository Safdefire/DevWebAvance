import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
export class User {
  id: number;
  login: string;
  password: string;
  statut: string;
  constructor(lg, pwd){
    this.login = lg;
    this.password = pwd;
    this.statut = "";
  }
  get _login(): string {return this.login;}
  get _password(): string {return this.password;}
  get _statut(): string {return this.statut;}
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  log : String =""
  pass : String =""
  lesUsers = [];
  user : User
  valideUser : User = new User("", "");
  isValide:boolean ;
  ngOnInit(): void {
  }
  constructor(private http: HttpClient, private router:Router) {
    const desUsers:Observable<[]> = this.http.get<[]>('http://127.0.0.1:8080/users/');
    desUsers.subscribe(desUsers => {
      this.lesUsers = desUsers;
      console.log(this.lesUsers);
    }); 
    
   }
   isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }
  isUserValide(u) :  boolean{
    if(u.login != null && u.password != null)
    {
      this.router.navigate(['/compte',u.statut, u.login]);
      return true;
    }
    else
    {
      let element1: HTMLElement = document.getElementById('loginIput');
      element1.setAttribute("style", "border: 1px solid red;");
      let element2: HTMLElement = document.getElementById('passwordInput');
      element2.setAttribute("style", "border: 1px solid red;");
      return false;
    }
  }
  seConnecter(): void {
    this.user = new User(this.log, this.pass);
    const newUser:Observable<User> = this.http.post<User>('http://127.0.0.1:8080/connexion' 
    , this.user );
    newUser.subscribe(newUser =>{
      this.valideUser = newUser;
      this.isValide = this.isUserValide(this.valideUser);
      console.log(this.valideUser);
      console.log(this.isValide);
   });
    
  }
}
