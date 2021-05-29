import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos:string[];
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  deleteTodo(i: number):void{
    this.delete.emit(i);
  }

}
