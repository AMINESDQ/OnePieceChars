import { RouterModule, Routes } from '@angular/router';
import { AffCardsComponent } from './aff-cards/aff-cards.component';
import { FormCardsComponent } from './form-cards/form-cards.component';

import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'' ,redirectTo:'ajout', pathMatch:'full'},
    {path:'ajout',component:FormCardsComponent},
    {path:'aff',component:AffCardsComponent},
    {path:'**',component:NotFoundComponent}
    
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class MyNgModule{}
