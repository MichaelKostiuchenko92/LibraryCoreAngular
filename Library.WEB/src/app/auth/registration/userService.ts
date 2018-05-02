import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserSendModel } from "./userSendModel";
import { ConstHelperService } from "./hostHelper.service";

@Injectable()
export class UserService {
    


    

        constructor(private constHelper: ConstHelperService, private http: HttpClient) {
             
        }
    


            addUser(user : UserSendModel) {
                const body = { Email: user.email, Name: user.name, Location: user.location,Password:user.password };
                       return this.http.post(this.constHelper.getHost() + 'api/Accounts', body)
                                    
                     }
}