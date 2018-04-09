import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoService } from './../../providers/todo-service/todo-service';

/**
 * Generated class for the ArchivosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archivos',
  templateUrl: 'archivos.html',
})
export class ArchivosPage {

  public archivedTodos=[];

  constructor(
    private todoService: TodoService,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.archivedTodos = this.todoService.getArchiveTodos(); 
  }

}