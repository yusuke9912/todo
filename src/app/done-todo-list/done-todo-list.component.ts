import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-done-todo-list',
  templateUrl: './done-todo-list.component.html',
  styleUrls: ['./done-todo-list.component.css']
})
export class DoneTodoListComponent implements OnInit {
  @Input() doneTodos:string[];
  @Output() delete = new EventEmitter();
  @Output() return = new EventEmitter();

  constructor() { }
  
    ngOnInit() {
  }
  
  returnTodo(i: number):void{
    this.return.emit(i);
  }

  deleteTodo(i: number):void{
    this.delete.emit(i);
  }

}
