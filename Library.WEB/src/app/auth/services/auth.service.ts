
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/Rx'; 
import { Observable } from 'rxjs/Rx';
import { Http,Headers,Response,RequestOptions } from "@angular/http";
import { ConstHelperService } from './hostHelper.service';
import { CredentialsSendModel } from "../models/credentialsSendModel";
import { HttpClient } from "@angular/common/http";
   

@Injectable()
export class AuthService    {
    
    private _authNavStatusSource = new BehaviorSubject<boolean>(false);

    authNavStatus = this._authNavStatusSource.asObservable();


    private loggedIn = false;


    private _roleStatusSource = new BehaviorSubject<string>(" ");

    roleNavStatus$ = this._roleStatusSource.asObservable();

    constructor(private constHelper: ConstHelperService,private http: Http) {
      
         
      this.loggedIn = !!localStorage.getItem('auth_token');
      this._authNavStatusSource.next(this.loggedIn);
      this._roleStatusSource.next(" ");
    }

    login(user:CredentialsSendModel){
        const body = { UserName:user.username,Password:user.password };
        let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    return this.http.post(this.constHelper.getHost() + 'api/Auth/login',  body,{ headers })
     .map(res=>res.json())
     .map(res=>{
            localStorage.setItem('auth_token',res.auth_token);
           this.loggedIn = true;
           this._authNavStatusSource.next(true);
          this._roleStatusSource.next('user');

           if (body.UserName = 'rumpled@mail.ru') {
             this._roleStatusSource.next('admin');
       }

       return true;         
    })
     
    }

    logout(){
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
      this._authNavStatusSource.next(false);
      this._roleStatusSource.next(" ");
    }

    isLoggedIn(){
        return this.loggedIn;
    }
}