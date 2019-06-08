import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../../services/planets.service';
import { FormGroup, FormControl } from '@angular/forms'; 
 
@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  dataComplete: boolean = false;
  alldataPlanets: any = [];
  hasError: boolean = false;  
  planetForm: any; 
  dataRes: any;
  config: any;
  searchPlanet: string;  
  resultExist: boolean = true; 

  constructor(
    private planetServ: PlanetsService
  ) { }

  ngOnInit() {
    this.pushData ();
    this.planetFormInit(); 
  }

  getAlldata(index) {
    return new Promise((success, reject) => {
      this.planetServ.getPlanets(index).subscribe( res => {
        this.dataRes = res;
        
        for (let i = 0; i < Object.keys(this.dataRes.results).length; i ++) {
          this.dataRes.results[i].url = this.dataRes.results[i].url.substring(29, this.dataRes.results[i].url.length - 1)
        }
         this.alldataPlanets = this.alldataPlanets.concat(this.dataRes.results); 
         success(true);
      }, (err) => {
        success(false);
      }) 
    }); 
       
  }

  pushData () {
    for (let i = 1; i < 8; i++) {
      this.getAlldata(i).then( value => {
        if(!value && i < 7) {
         this.hasError = true; 
        }
      })
    }
    if(this.hasError)  {
      this.dataComplete = false; 
    } else {
      this.setConfigValue(Object.keys(this.alldataPlanets).length)
      this.dataComplete = true; 
    }
  }

  setConfigValue(value) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: value
    };
  }

  planetFormInit() {
    this.planetForm = new FormGroup({
      planetValue: new FormControl('5')
    });
  }

  chagePlanetPage(event) {
    this.config.currentPage = event;
  }

  chagePlanetValue() {
    this.config.itemsPerPage = this.planetForm.value.planetValue;
    this.config.currentPage = 1;  
  }

}
