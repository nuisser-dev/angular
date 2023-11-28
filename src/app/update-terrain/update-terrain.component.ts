import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Terrain } from '../model/terrain.model';

@Component({
  selector: 'app-update-terrain',
  templateUrl: './update-terrain.component.html',
  styleUrls: ['./update-terrain.component.css']
})
export class UpdateTerrainComponent implements OnInit{
  @Input()
  terrains !:Terrain

  @Output()
  terrainUpdated = new EventEmitter<Terrain>();

  @Input()
ajout!:boolean;

  ngOnInit(): void {
    console.log("ngOnInit du composant Updateterrain",this.terrains);
  }

  saveterrain()
  {this.terrainUpdated.emit(this.terrains)}
}
