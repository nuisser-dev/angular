import { Component, OnInit } from '@angular/core';
import { Terrain } from '../model/terrain.model';
import { Tickets } from '../model/tickets.model';
import { TicketServService } from '../services/ticket-serv.service';

@Component({
  selector: 'app-recherche-by-terrain',
  templateUrl: './recherche-by-terrain.component.html',
  styleUrls: ['./recherche-by-terrain.component.css']
})
export class RechercheByTerrainComponent  implements OnInit{
  Idterrain !:number
  terrains !: Terrain[]
  tickets !: Tickets[]


  constructor(private tickets_service: TicketServService){}
  ngOnInit(): void {
    this.tickets_service.liste_terrain().
    subscribe(cats => {this.terrains = cats;
    console.log(cats);
    });
    



  }

  onChange(){

    this.tickets_service.rechercherBYterrain(this.Idterrain).subscribe(prods =>{this.tickets=prods;   console.log(prods);});
  }
}
