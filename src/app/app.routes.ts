import { Routes } from '@angular/router';
import { DrangonballZComponent } from './components/drangonball-z/drangonball-z.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { PersonajeComponent } from './components/drangonball-z/personaje/personaje.component';
import { DetalleplanetaComponent } from './components/planetas/detalleplaneta/detalleplaneta.component';

export const routes: Routes = [
    {
    path:'',
    pathMatch:'full',
    redirectTo:'personajes'

},
{
     path:'personajes',
    component:DrangonballZComponent
},
{  path:'personajes/page/:page',
    component:DrangonballZComponent},

    {
  path:'planetas/page/:page',
    component:PlanetasComponent},

    {
        path:'personaje/:id',
        component:PersonajeComponent
    },
    

    {
  path:'planetas/detalle/:id',
    component:DetalleplanetaComponent}
];
