import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { MapPlot } from 'src/classes/i-map-plot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number;
  lng: number;

  //lat: number = 51.260197;
  //lng: number = 4.402771;
  //location : Object;

  title: string = 'Antwerpen leegstand';
  ip: string = '';


  constructor(private maps:HttpService){
  }

  ngOnInit(){
    console.log("Starting data lookup");

    this.maps.GetMyLoc().subscribe(data=>{
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.ip = data.ip;
    })

    //this.maps.GetLeegstandTyped().subscribe(data=>{
    //  console.log(data);
        
     // });
    //
  }
}
