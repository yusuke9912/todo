import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

 todos: string[] = [];
  doneTodos :string[] = [];
  
  ngOnInit(){
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.doneTodos = JSON.parse(localStorage.getItem('doneTodos')) || [];
  }
  
  returnTodo(i: number): void{
    this.todos.push(this.doneTodos[i]);
    this.doneTodos.splice(i,1);
    localStorage.setItem('todos',JSON.stringify(this.todos));
    localStorage.setItem('doneTodos',JSON.stringify(this.doneTodos));
  }
  
  deleteTodo(i: number): void{
    this.doneTodos.splice(i,1);
    localStorage.setItem('doneTodos',JSON.stringify(this.doneTodos));
  }
}
