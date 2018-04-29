import { Injectable } from "@angular/core";

@Injectable()
export class ConstHelperService {

    path: string;
  
    constructor() {
        this.path = "http://" + location.host + "/";
    }

    getHost(){
        return this.path;
    }
} 