import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './tickets/tickets.component';
import { AddTicketsComponent } from './add-tickets/add-tickets.component';
import { UpdateTicketsComponent } from './update-tickets/update-tickets.component';
import { RechercheByTerrainComponent } from './recherche-by-terrain/recherche-by-terrain.component';
import { RechercheByNameComponent } from './recherche-by-name/recherche-by-name.component';
import { TerrainsComponent } from './terrains/terrains.component';
import { UpdateTerrainComponent } from './update-terrain/update-terrain.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TicketsGuard } from './tickets.guard';
const routes: Routes = [

{path:"tickets",component:TicketsComponent},
{path:"add-ticket",component:AddTicketsComponent, canActivate:[TicketsGuard]},
{path:"update-tickets/:id",component:UpdateTicketsComponent},
{path:"search-byTerrain",component:RechercheByTerrainComponent},
{path:"search-byname",component:RechercheByNameComponent},
{path:"terrains",component:TerrainsComponent},
{path:"login",component:LoginComponent},
{path:"forbidden",component:ForbiddenComponent},
{path:"terrains-update/:id",component:UpdateTerrainComponent},
{path:"",redirectTo:"login",pathMatch:"full"}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
