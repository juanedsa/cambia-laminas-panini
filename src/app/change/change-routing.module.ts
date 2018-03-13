import { ChangeComponent } from './change/change.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/cambiar-monas', pathMatch: 'full' },
  { path: 'cambiar-monas', component: ChangeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeRoutingModule {}
