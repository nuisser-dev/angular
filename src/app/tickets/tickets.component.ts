import { Component, OnInit } from '@angular/core';
import { Tickets } from '../model/tickets.model';
import { TicketServService } from '../services/ticket-serv.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})


export class TicketsComponent  implements OnInit{
  newTickets =new Tickets()
  tab_tickets! :Tickets[]
constructor( private tickets_service:TicketServService,private str:ToastrService ,public authService: AuthService){

 //this.tab_tickets=tickets_service.liste_tickets()
 
}




ngOnInit(): void {
  
  this.chargertickets();
}
chargertickets()
{this.tickets_service.listeP_tickets().subscribe(prods => {
  console.log(prods);
  this.tab_tickets = prods;
  });}


  delete_tickets(p: Tickets)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.tickets_service.supprimerTickets(p.idtic).subscribe(() => {
  console.log("produit supprimé");
  this.chargertickets();
  });
  this.str.success('message ','ticket was deleted')
  } 


}


