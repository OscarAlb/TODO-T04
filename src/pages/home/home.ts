import { TodoService } from './../../providers/todo-service/todo-service';
import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray } from 'ionic-angular';
import { ArchivosPage } from '../archivos/archivos';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public reorderIsEnabled = false;
  public archivosPage = ArchivosPage;

  constructor(
    private todoService: TodoService,
    public navCtrl: NavController,
    private alertController: AlertController) {
    this.todos=this.todoService.getTodos();
    }


  archiveTodo(todoIndex){
    this.todoService.archiveTodo(todoIndex);
  }


  goToArchivePage() {
    this.navCtrl.push(ArchivosPage)
  }

  toggleRecorder() {
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event) {
    reorderArray(this.todos, $event);
  }

  openToDoAlert() {
    let addToDoAlert = this.alertController.create({
      title: "Añadir nuevo registro",
      message: "Inserta tu Tarea",
      inputs: [{
        type: "text",
        name: "addTodoInput"
      }],
      buttons: [{
        text: "Cancelar"
      },
      {
        text: "Añadir",
        handler: (inputData) => {
          let todoText;
          todoText = inputData.addTodoInput;
          this.todoService.addTodo(todoText);
        }
      }]
    });
    addToDoAlert.present()
  }

}