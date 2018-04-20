import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SbdService {

    constructor(private _http: HttpClient) { }

    requestCount(target, ope, value) {
        if(ope = '='){
            ope ='D';
        }else if(ope = '>'){
            ope = 'E';
        }else if(ope ='<'){
            ope = 'C';
        }
        return this._http.get("http://localhost:3000/api/adults/count?target="+target+"&ope=%3" + ope +"&value="+value).map(result => result);
    }

    requestAge() {
        return this._http.get("http://localhost:3000/api/adults/countAge").map(result => result);
    }
}