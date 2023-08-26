import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }
  private client = createClient({
    space: '1ahrcuvt518a',
    accessToken: 'mTSpGh0HMZ9WPRzz0cv9CL-UNPVz4-pdnYLepUS_GZ0'
  })

  getEntries() {
    const promise = this.client.getEntries()
    return from(promise)
  }
}
