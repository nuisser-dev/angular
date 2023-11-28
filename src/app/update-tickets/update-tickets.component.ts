import { Component, OnInit } from '@angular/core';
import { Tickets } from '../model/tickets.model';
import { TicketServService } from '../services/ticket-serv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Terrain } from '../model/terrain.model';
@Component({
  selector: 'app-update-tickets',
  templateUrl: './update-tickets.component.html',
  styleUrls: ['./update-tickets.component.css']
})
export class UpdateTicketsComponent implements OnInit{
  ticket = new Tickets()
  update_ter!:Terrain[]
  terr_curn!:number
constructor(private service_tickets :TicketServService,private activatedRoute: ActivatedRoute,private router:Router){}

modifyTicket()
{
  
 // this.ticket.terr=this.service_tickets.consulter_terrain(this.terr_curn)
 this.ticket.terrain=this.update_ter.find(cat => cat.idTer == this.terr_curn)!;
this.service_tickets.update_tickets(this.ticket).subscribe(prod => {
  this.router.navigate(['tickets']); }
  );
  
}



  ngOnInit(): void {
  //  this.update_ter=this.service_tickets.liste_terrain()
    this.service_tickets.liste_terrain().subscribe(cats => {this.update_ter = cats;
      console.log(cats);
      });
      
  this.service_tickets.consulterTickets(this.activatedRoute.snapshot.params['id']).subscribe( prod =>{ this.ticket = prod; } ) ;
  // this.terr_curn=this.ticket.terrain.idTer
  
  }
}
