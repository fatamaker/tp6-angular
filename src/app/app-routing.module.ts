import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { FormationComponent } from './formation/formation.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import{UpdateFormationComponent} from './update-formation/update-formation.component';
import { RechercheParThemeComponent } from './recherche-par-theme/recherche-par-theme.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


const routes: Routes = [{path : "formation" , component : FormationComponent},
                        {path : "add-formation", component : AddFormationComponent},
                        {path: "updateFormation/:id", component: UpdateFormationComponent},
                        {path:"rechercheParTheme", component:RechercheParThemeComponent},
                        {path: "rechercheParNom", component : RechercheParNomComponent}

                                           
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
