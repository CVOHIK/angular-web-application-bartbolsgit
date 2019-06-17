import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Leegstand } from 'src/classes/i-leegstand';
import { MapPlot } from 'src/classes/i-map-plot';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private page: number;

  constructor(private http:HttpClient) {
    this.page = 1;
   }

  GetLeegstandTyped():Observable<Leegstand>{
    return this.http.get<Leegstand>("https://datasets7.antwerpen.be/leegstandsregister/2019.json?page_size=20&page=1");
    //return this.http.get<Leegstand>("https://datasets7.antwerpen.be/leegstandsregister/2019.json?page_size=20&page="+this.page);

  }

  GetMyLoc(){
    return this.http.get<MapPlot>("https://ipapi.co/json/");
      //"https://ipapi.com/api/check?access_key=5d1c52d2a6c92e4d2a1d1a8bfd8d699f");
  }
}
