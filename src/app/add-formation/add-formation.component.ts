import { Component ,OnInit } from '@angular/core';
import { Formation } from '../model/formation.model';
import { FormationService } from '../service/formation.service';
import { Router } from '@angular/router';
import { Theme } from '../model/theme.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user.model';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrl: './add-formation.component.css'
})
export class AddFormationComponent implements OnInit {
  newFormation= new Formation();
  themes! : Theme[];
  newIdThem! : number;
  newTheme! : Theme;
  myForm!:FormGroup;
  public user = new User();


  constructor(private formationService:  FormationService , private router :Router, private formBuilder : FormBuilder){
    
  }
  ngOnInit(): void{
    this.themes = this.formationService.listerTheme();
    this.myForm=this.formBuilder.group({
      idFormation: [this.newFormation.idFormation,Validators.required],
      nomFormation: [this.newFormation,[Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      prixFormation: [this.newFormation.prixFormation ,[Validators.required, Validators.min(0)]],
      datedebut: [this.newFormation.datedebut],
      datefin: [this.newFormation.datefin],
      email: ['', [Validators.required, Validators.email]],
      modeFormation: [this.newFormation.modeFormation],
      idCat: [this.newTheme!]
    });
  }


  addFormation(){
    //console.log(this.newFormation);
    this.newTheme=this.formationService.consulterTheme(this.newIdThem);
    this.newFormation.theme=this.newTheme;
    this.formationService.ajouterFormation(this.newFormation);
    this.router.navigate(['formation']);
    }

    
OnRegister(){
  console.log(this.user);
}

}
