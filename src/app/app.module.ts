import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AddTicketsComponent } from './add-tickets/add-tickets.component';
import { FormsModule } from '@angular/forms';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { ToastrModule } from 'ngx-toastr';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UpdateTicketsComponent } from './update-tickets/update-tickets.component'
import { HttpClientModule } from '@angular/common/http';
import { RechercheByTerrainComponent } from './recherche-by-terrain/recherche-by-terrain.component';
import { RechercheByNameComponent } from './recherche-by-name/recherche-by-name.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { TerrainsComponent } from './terrains/terrains.component';
import { UpdateTerrainComponent } from './update-terrain/update-terrain.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    AddTicketsComponent,
    MenuNavComponent,
    UpdateTicketsComponent,
    RechercheByTerrainComponent,
    RechercheByNameComponent,
    SearchFilterPipe,
    TerrainsComponent,
    UpdateTerrainComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
