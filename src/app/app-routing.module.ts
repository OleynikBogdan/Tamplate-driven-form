import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TamplateDrivenComponent } from './tamplate-driven/tamplate-driven.component';

const routes: Routes = [
{
  path: 'tamplate',
  component: TamplateDrivenComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
