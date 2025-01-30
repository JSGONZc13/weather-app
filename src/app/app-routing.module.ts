
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { coreRouting } from './core/core.routing';


@NgModule({
  imports: [RouterModule.forRoot(coreRouting)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
