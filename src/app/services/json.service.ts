import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  // lien du json :
  private _jsonURL = 'assets/tableaux.json'; 
  
  constructor(private http: HttpClient) { 
    this.getJSON().subscribe(data => {
      console.log(data["tableaux"]);
    })
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
