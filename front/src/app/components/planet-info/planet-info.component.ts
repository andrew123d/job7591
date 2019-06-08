import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../../services/planets.service';
import { Router, ActivatedRoute, Params } from '@angular/router'; 



@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent implements OnInit {

  planetId: any;
  planetData: any;
  dataComplete: boolean = false;  

  constructor(
    private planetServ: PlanetsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getParams ()
  }

  getParams () {
    this.route.paramMap.subscribe(param => {
      let planetId = param.get('planetUrl');
      //console.log(planetId)
      if(planetId == undefined || planetId == null) {
        this.dataComplete = false;
      } else {
        this. getPlanetData (planetId); 
      }
    })
  }

  getPlanetData (planet) {
    this.planetServ.getPlanetInfo(planet).subscribe( planet => {
      this.planetData = planet; 
      this.dataComplete = true; 
    }, (err) => {
      this.dataComplete = false; 
    })
  }

  returnToHome() {
    this.router.navigate(['/']); 
  }

}
