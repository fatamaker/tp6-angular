import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from '../model/formation.model';
import { FormationService } from '../service/formation.service';
import { Router } from '@angular/router';
import { Theme } from '../model/theme.model';
import { ThisReceiver } from '@angular/compiler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model';
@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styles: ``
})


  export class UpdateFormationComponent implements OnInit {
    currentFormation = new Formation();
    themes ?:Theme[];
    updatedThemId! : number;
    myForm!:FormGroup;
    public user = new User();
  
    constructor(private activatedRoute: ActivatedRoute,
      private router :Router,
    private  FormationService:  FormationService,
    private formBuilder : FormBuilder
  ) { }

    ngOnInit() {
    //console.log(this.route.snapshot.params.id);
    this.themes =this.FormationService.listerTheme();
    this. currentFormation = this.FormationService.consulterformation(this.activatedRoute.snapshot.params['id']);
    console.log(this. currentFormation);
    //this.updatedThemId=this.currentFormation.theme?.idTheme;


    this.myForm=this.formBuilder.group({
      idFormation: [this.currentFormation.idFormation],
      nomFormation: [this.currentFormation.nomFormation],
      prixFormation: [this.currentFormation.prixFormation],
      datedebut: [this.currentFormation.datedebut],
      datefin: [this.currentFormation.datefin],
      email: ['', [Validators.required, Validators.email]],
      modeFormation: [this.currentFormation.modeFormation],
      idCat: [this.updatedThemId]
    });
    
  
    
    }

    updateFormation()
{ 
  this.currentFormation.theme=this.FormationService.consulterTheme(this.updatedThemId);
this.FormationService.updateFormation(this.currentFormation);
this.router.navigate(['formation']);



}

OnRegister(){
  console.log(this.user);
}






  }
