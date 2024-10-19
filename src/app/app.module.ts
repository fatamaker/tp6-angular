import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { FormsModule } from '@angular/forms';

import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { RechercheParThemeComponent } from './recherche-par-theme/recherche-par-theme.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    AddFormationComponent,
  
    UpdateFormationComponent,
        RechercheParThemeComponent,
        RechercheParNomComponent,
        SearchFilterPipe
        
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
