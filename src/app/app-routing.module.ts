import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './dashboard/index/index.component';
import { EmpresaIndexComponent } from './empresas/empresa_index/empresa_index.component';
import { ListarComponent as ListarComponentRubro} from './empresas/rubro/listar/listar.component';
import { ListarComponent as ListarComponentPlanes } from './empresas/planes/listar/listar.component';
import { NuevoComponent as NuevoComponentPlanes } from './empresas/planes/nuevo/nuevo.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: 'dashboard', component: IndexComponent },
  { path: 'empresa', component: EmpresaIndexComponent},
  { path: 'rubro', component: ListarComponentRubro},
  { path: 'planes', component: ListarComponentPlanes},
  { path: 'planes/plan', component: NuevoComponentPlanes},
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
  

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
