import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@hydrus-water-tools/api-interfaces';

@Component({
  selector: 'hydrus-water-tools-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
