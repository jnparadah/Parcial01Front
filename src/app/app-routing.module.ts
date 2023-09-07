import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComidaComponent } from './comida/comida.component';
import { DueniosComponent } from './duenios/duenios.component';
import { MascotasComponent } from './mascotas/mascotas.component';

const routes: Routes = [
  {path:"Comida", component:ComidaComponent},
  {path:"Dueños", component:DueniosComponent},
  {path:"Mascotas", component:MascotasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
