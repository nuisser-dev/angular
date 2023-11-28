import { Component, OnInit } from '@angular/core';
import { TicketServService } from '../services/ticket-serv.service';
import { Tickets } from '../model/tickets.model';

@Component({
  selector: 'app-recherche-by-name',
  templateUrl: './recherche-by-name.component.html',
  styleUrls: ['./recherche-by-name.component.css']
})
export class RechercheByNameComponent implements OnInit{
  nomterr !:string
  tickets !: Tickets[]
  alltickets !:Tickets[]
  searchTerm !:string
  constructor(private tickets_service :TicketServService) {
   
  }
ngOnInit(): void {
  this.tickets_service.listeP_tickets().subscribe(prods => {
    console.log(prods);
    this.tickets = prods;
    });
    
  
}

rechercherterr(){
this.tickets_service.rechercherBYname(this.nomterr).subscribe(prods => {
  this.tickets = prods;
  console.log( this.tickets )
 this.alltickets=prods});


}

onKeyUp(filterText : string){
  this.tickets = this.alltickets.filter(item =>
  item.descpt.toLowerCase().includes(filterText));
  }
}
