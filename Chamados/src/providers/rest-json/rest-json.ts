import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestJsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestJsonProvider {

  constructor(public http: Http) {
    console.log('Hello RestJsonProvider Provider');
  }


  getWS(array) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        var urlPost = "http://rest.url";

        this.http.post(urlPost, array, { headers: headers })
            .subscribe(res => {
                //console.log("\n \n \n \n ================================ \n["+array+"]\n"+JSON.stringify(res)+"\n ================================ \n \n \n \n");
                resolve(res.json());
            }, (err) => {
                reject(err);
            });

    });
}

}
