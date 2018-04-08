import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos=[];

  constructor(public navCtrl: NavController, 
    private alertController: AlertController) {

  }

  openToDoAlert() {
    let addToDoAlert = this.alertController.create({
      title: "Add A ToDo",
      message: "Enter your todo",
      inputs: [{
        type: "text",
        name: "addTodoInput"
      }],
      buttons: [{
        text: "Cancel"
      },
      {
        text: "Add ToDo",
        handler:(inputData)=>{
          let todoText;
          todoText=inputData.addTodoInput;
          this.todos.push(todoText);
        }
      }]
    });
    addToDoAlert.present()
  }

}
