import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DoneTodoListComponent } from './done-todo-list/done-todo-list.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

const appRoutes: Routes = [
  {path:'', component: PageOneComponent},
  {path:'pagetwo',component: PageTwoComponent}
  ]
  
  @NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    DoneTodoListComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
