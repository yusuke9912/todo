import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  todos: string[] = [];
  doneTodos :string[] = [];
  
  ngOnInit(){
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.doneTodos = JSON.parse(localStorage.getItem('doneTodos')) || [];
  }
  
  addTodo(newTodo: string): void{
    this.todos.push(newTodo);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }
  
  deleteTodo(i: number): void{
    this.doneTodos.push(this.todos[i]);
    this.todos.splice(i,1);
    localStorage.setItem('todos',JSON.stringify(this.todos));
    localStorage.setItem('doneTodos',JSON.stringify(this.doneTodos));
  }
}
