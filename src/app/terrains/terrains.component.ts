import { Component, OnInit } from '@angular/core';
import { Terrain } from '../model/terrain.model';
import { TicketServService } from '../services/ticket-serv.service';

@Component({
  selector: 'app-terrains',
  templateUrl: './terrains.component.html',
  styleUrls: ['./terrains.component.css']
})
export class TerrainsComponent implements OnInit {
terr !:Terrain[]

terrr :Terrain = {idTer:1,Cpt:500,nomTer:'santiago'};

ajout:boolean=true;

constructor(private service_tickets : TicketServService)
{}

  ngOnInit(): void {
   this.chargerterrain();
  }


  chargerterrain(){ this.service_tickets.liste_terrain().
    subscribe(cats => {this.terr = cats; console.log(this.terr); });}

  terrainUpdated(terr :Terrain)
  {this.service_tickets.ajouterterrain(terr).subscribe( ()=> this.chargerterrain());

  }
  updateterr(terr :Terrain)
  {
this.terrr = terr

this.ajout=false

  }
}
