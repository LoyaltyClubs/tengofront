import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './dashboard/index/index.component';
import { EmpresaIndexComponent } from './empresas/empresa_index/empresa_index.component';
import { ListarComponent as ListarComponentRubro} from './empresas/rubro/listar/listar.component';
import { ListarComponent as ListarComponentPlanes } from './empresas/planes/listar/listar.component';
import { ListarComponent } from './empresas/ciudades/listar/listar.component';


const routes: Routes = [
  { path: 'dashboard', component: IndexComponent },
  {
    path: 'empresa',
    loadChildren: () => import('./empresas/empresas.module').then((m) => m.EmpresasModule),
  },
  { path: 'rubro', component: ListarComponentRubro},

  //{ path: 'planes/plan', component: NuevoComponentPlanes},
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
