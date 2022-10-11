import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todo:Todo[];

  constructor() { 
    this.todo =  []
  }
  deleteTodo(event:Todo)
  {
const index = this.todo.indexOf(event)
this.todo.splice(index,1);


  }

  addTodo(event:Todo)
  {
const index = this.todo.indexOf(event)
this.todo.push(event);


  }
  ngOnInit(): void {
  }

}
