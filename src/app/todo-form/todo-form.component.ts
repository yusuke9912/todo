import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  newTodo: string ='';
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  addTodo():void{
    if(this.newTodo === '') return;
    this.add.emit(this.newTodo);
    this.newTodo = '';
  }

}
