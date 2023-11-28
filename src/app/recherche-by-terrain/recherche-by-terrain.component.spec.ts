import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheByTerrainComponent } from './recherche-by-terrain.component';

describe('RechercheByTerrainComponent', () => {
  let component: RechercheByTerrainComponent;
  let fixture: ComponentFixture<RechercheByTerrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheByTerrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheByTerrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
