import { AuthService } from './../auth/services/auth.service';

import { OnInit, OnDestroy, Component } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'nav-menu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css'],
  providers: [AuthService]
})
export class NavmenuComponent implements OnInit, OnDestroy {

  status: boolean;
  subscription: Subscription;

  constructor(private authService:AuthService) {
   }

   logout() {
    this.authService.logout();       
}

  ngOnInit() {
    this.subscription = this.authService.authNavStatus.subscribe(status => this.status = status);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}
}
