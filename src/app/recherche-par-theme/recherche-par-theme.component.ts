import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../model/formation.model';
import { FormationService } from '../service/formation.service';
import { Theme } from '../model/theme.model';

@Component({
  selector: 'app-recherche-par-theme',
  templateUrl: './recherche-par-theme.component.html',
  styles: ``
})
export class RechercheParThemeComponent implements OnInit {
  formations!: Formation[];
  themes! : Theme[];
  idTheme!: number;
  
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
   private formationService : FormationService) { }

  ngOnInit() {
    this.themes=this.formationService.listerTheme();
    this.formations = [] ;
  }
  onChange(){
    this.formations=this.formationService.rechercherParTheme(this.idTheme);
  }

}
