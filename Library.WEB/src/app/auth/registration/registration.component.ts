
import { Component, OnInit } from "@angular/core";
import { UserService } from './../services/userService';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserSendModel } from './../models/userSendModel';


@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
    providers: [UserService]
  })


export class RegistrationComponent implements OnInit {
    
      form: FormGroup;
      exist:boolean;
      constructor(private usersService: UserService, private router: Router) {
     
      }
    
      ngOnInit() {
        this.form = new FormGroup({
          'email': new FormControl(null, [Validators.required, Validators.email]),
          'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
          'name': new FormControl(null, [Validators.required]),
          'location': new FormControl(null, [Validators.required]),
          'agree': new FormControl(false, [Validators.requiredTrue])
        });
      }
    
      
      onSubmit() {
        const {email, password, name,location} = this.form.value;
        const user = new UserSendModel(email, password, name,location);
        this.usersService.addUser(user).subscribe((result:UserSendModel) => {
            console.log(result);
            if (!result.exist) {
                 
              this.router.navigateByUrl('/');
              return;
            }  
            this.exist=true;
            this.router.navigateByUrl('/registration');
        }, error => {
            console.log(error);
          }
        );
           
          
      }
    
}