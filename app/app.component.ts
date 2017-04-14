import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';
import { Quote } from './quote';

@Component({
  selector: 'quote-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  quote: Quote;
  count: number;
  loading: boolean;
  constructor(private quoteService: QuoteService) { }
  ngOnInit() {
    this.count = 0;
    this.quoteUpdate();
  }
  quoteUpdate() {
    this.loading = true;
    this.quoteService.getQuote(this.count)
      .then(response => this.quote = response)
      .then(respo => this.loading = false);
    this.count += 1;
  }
}
