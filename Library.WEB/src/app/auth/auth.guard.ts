
import { Injectable } from "@angular/core";
import { AuthService } from './services/auth.service';
import { CanActivate, Router } from "@angular/router";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private user: AuthService,private router: Router) {}

  canActivate() {

    if(!this.user.isLoggedIn())
    {
       this.router.navigate(['api/Auth/login']);
       return false;
    }

    return true;
  }
}