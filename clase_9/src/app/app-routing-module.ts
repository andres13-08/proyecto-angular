import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './featured/auth/login.component';
import { InicioComponent } from './featured/dashboard/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent, canActivate: [authGuard] },
  {
    path: 'alumnos',
    loadChildren: () => import('./featured/alumnos/alumnos.module').then((m) => m.AlumnosModule),
  },
  {
    path: 'cursos',
    loadChildren: () => import('./featured/cursos/cursos.module').then((m) => m.CursosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}