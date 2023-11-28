import { Component, OnInit } from '@angular/core';
import { Tickets } from '../model/tickets.model';
import { TicketServService } from '../services/ticket-serv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Terrain } from '../model/terrain.model';
@Component({
  selector: 'app-add-tickets',
  templateUrl: './add-tickets.component.html',
  styleUrls: ['./add-tickets.component.css']
})
export class AddTicketsComponent implements OnInit{
  newTickets =new Tickets()
  terr !: Terrain[]
  newidterr!:number
  newTerrain!:Terrain
constructor(private service_tickets:TicketServService,private router:Router){}

addTickets()
{
// this.newTerrain=this.service_tickets.consulter_terrain(this.newidterr)
this.newTickets.terrain=this.terr.find(cat => cat.idTer == this.newidterr)!;
this.service_tickets.add_tickets(this.newTickets).subscribe(prod => {
  console.log(prod);
  this.router.navigate(['tickets']);
  });
  
  
}



ngOnInit(): void {
 this.service_tickets.liste_terrain().subscribe(cats => {this.terr = cats;
  console.log(cats);
  });
}
}