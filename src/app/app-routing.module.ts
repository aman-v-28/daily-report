import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './MyComponent/groups/groups.component';
import { SingleAnimalComponent } from './MyComponent/single-animal/single-animal.component';

const routes: Routes = [
  {path:'',component: SingleAnimalComponent},
  {path:'groups',component: GroupsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
