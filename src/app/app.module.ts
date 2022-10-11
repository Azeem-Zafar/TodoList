import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { TodosItemComponent } from './MyComponent/todos-item/todos-item.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosItemComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  
 }
