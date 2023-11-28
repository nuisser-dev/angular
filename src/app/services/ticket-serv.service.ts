import { Injectable } from '@angular/core';
import { Tickets } from '../model/tickets.model';
import { Terrain } from '../model/terrain.model';
import { HttpClient, HttpHeaders } from'@angular/common/http';
import { Observable } from 'rxjs';
import { usersUrl } from '../config';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  })
 }

@Injectable({
  providedIn: 'root'
})
export class TicketServService {


tickets = new Tickets()
terr =new Terrain()
  constructor(private http : HttpClient ,private authService : AuthService) { 
    

  }


        listeP_tickets(): Observable<Tickets[]>{
          let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.get<Tickets[]>(usersUrl+"all",{headers:httpHeaders});
          }



          add_tickets( prod: Tickets):Observable<Tickets>{
            let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.post<Tickets>(usersUrl, prod,  {headers:httpHeaders});
            }

            supprimerTickets(id : number) {
              const url = `${usersUrl+"delterrain"}/${id}`;
              let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
              return this.http.delete(url, {headers:httpHeaders});
              }


              consulterTickets(id: number): Observable<Tickets> {
                const url = `${usersUrl+"getbyid"}/${id}`;
                let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
                return this.http.get<Tickets>(url,{headers:httpHeaders});
                }
              
                update_tickets( tik:Tickets): Observable<Tickets>
            {
              let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
            return this.http.put<Tickets>(usersUrl+"updateterrain", tik, {headers:httpHeaders});
            }
            
            liste_terrain():Observable<Terrain[]>{
              let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
              return this.http.get<Terrain[]>(usersUrl+"/terrain_get",{headers:httpHeaders});
              }


              rechercherBYterrain(idCat: number):Observable<Tickets[]> {
                const url = `${usersUrl}/terrain_id/${idCat}`;
                return this.http.get<Tickets[]>(url);}

                rechercherBYname(nom: string):Observable<Tickets[]> {
                  const url = `${usersUrl}tickets_containes/${nom}`;
                  console.log(url)
                  return this.http.get<Tickets[]>(url);}

                  
                  ajouterterrain( cat: Terrain):Observable<Terrain>{
                    const usersUrl : string ='http://localhost:8087/terrain/api/terrain_get';
                    return this.http.post<Terrain>(usersUrl, cat, httpOptions);
                    }
}
