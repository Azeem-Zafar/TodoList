import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {
@Input() myTodo:Todo|any;

@Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete()
  {
this.todoDelete.emit();

  }
}
