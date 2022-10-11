import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string|any;
  desc:string|any;
  
 
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(myform:any)
  {
const todo = 
{
title : this.title,
desc : this.desc,

}
this.todoAdd.emit(todo);
myform.reset();

  }
}
