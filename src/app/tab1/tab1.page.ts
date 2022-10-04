import { Component } from '@angular/core';
import { ApiService, User } from '../servicos/api.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  subscriptons: Subscription[] = [];
  users: User[] = [];

  constructor(private apiService: ApiService) {}

  ionViewDidEnter() {
    this.apiService.BuscarApi().subscribe({
      next: users => this.users = users,
      error: err => {}
    })
  }

  ionViewWillLeave() {
    this.subscriptons.forEach(sub => sub.unsubscribe())
  }
}
