import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.service';
import { QuotePage } from '../quote/quote';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private quotesService: QuotesService,
    private modalController: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(selectedQuote: Quote) {
    const modal = this.modalController.create(QuotePage, selectedQuote);
    modal.present();
    modal.onDidDismiss( (remove: boolean) => {
      //console.log(remove);
      if (remove) {
        this.quotesService.removeQuoteFromFavorites(selectedQuote);
        this.quotes = this.quotesService.getFavoriteQuotes();
        // const position = this.quotes.findIndex( (quoteEl: Quote) => {
        // return quoteEl.id == quote.id;
      //});
      // this.quotes.splice(position, 1);
      }
    });

  }

}
