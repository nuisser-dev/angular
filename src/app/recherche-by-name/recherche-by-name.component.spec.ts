import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheByNameComponent } from './recherche-by-name.component';

describe('RechercheByNameComponent', () => {
  let component: RechercheByNameComponent;
  let fixture: ComponentFixture<RechercheByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheByNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
