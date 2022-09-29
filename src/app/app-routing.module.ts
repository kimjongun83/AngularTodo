import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './ui/todo-item/todo-item.component';

const routes: Routes = [
  { 
    title: 'Detail',
    path : 'detail',component:TodoItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
