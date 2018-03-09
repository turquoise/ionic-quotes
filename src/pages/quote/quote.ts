import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  person: string;
  text: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, // controls the stack of pages
    private viewController: ViewController // controls currently active pages
  ) {
  }

  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');


  }

  onClose(remove = false) {
    this.viewController.dismiss(remove);
  }

}
