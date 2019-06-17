import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Leegstand } from 'src/classes/i-leegstand';

@Component({
  selector: 'app-datamanager',
  templateUrl: './datamanager.component.html',
  styleUrls: ['./datamanager.component.css']
})
export class DatamanagerComponent implements OnInit {
  public leegstandLijst: Leegstand[];

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.GetData();
  }

  GetData(){
    console.log("start of dataget") 

    this.http.GetLeegstandTyped().subscribe({
      next:(result)=>{
        let Leegstand: Leegstand;  
        Leegstand = result;
        this.leegstandLijst[1] = Leegstand;   
        console.log(result.pva_straat);
        this.delay(10);
      }
    })
  }

  GetLocationAdress(index : number) : String{
    console.log("testing nr" + index);
    let S : String = this.leegstandLijst[index].pva_straat + " " + this.leegstandLijst[index].pva_huisnr1 + " bus " + this.leegstandLijst[index].pva_busnr + " " + this.leegstandLijst[index].pva_postcode;
    console.log("result" + S);

    return S;
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("done"));
  }
}
