import { Routes } from '@angular/router';
import { DrangonballZComponent } from './components/drangonball-z/drangonball-z.component';

export const routes: Routes = [
    {
    path:'',
    pathMatch:'full',
    redirectTo:'personajes'

},
{
     path:'personajes',
    component:DrangonballZComponent
}

];
