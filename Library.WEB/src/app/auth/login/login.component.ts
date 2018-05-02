
import { OnInit, Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
 
import { Router, ActivatedRoute } from "@angular/router";

import { CredentialsSendModel } from './../models/credentialsSendModel';
import { UserSendModel } from './../models/userSendModel';
import { AuthService } from './../services/auth.service';
import { debug } from "util";



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
    
     
    form: FormGroup;
    unexist:boolean;
    errors:string;

    constructor(private authService: AuthService, private router: Router) { }
       
      ngOnInit() {
          this.form = new FormGroup({
            'username': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
          });
        }
       
        login(){
          
          const {username, password} = this.form.value;
          const user = new CredentialsSendModel(username,password);

          this.authService.login(user)

          .subscribe((result)=>{
            
              if(result){
                this.router.navigate(['/allPost']);
              }
              
          },
      
          error => this.errors = error);
          
        }
} 
