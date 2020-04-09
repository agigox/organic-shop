import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'organic-shop';
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }

  ngOnInit(): void {
    this.items.subscribe(items => console.log(items));
  }
}
