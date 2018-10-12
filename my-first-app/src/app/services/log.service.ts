import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
const STORAGE_KEY = 'my-logs'; 

@Injectable()
export class LogService {

  

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  messages: Array<string> = []

  push(message: string){
    this.messages.push(message);
    this.storage.set(STORAGE_KEY, this.messages);
  }

  fetchAll(): Array<string>{
    this.messages = this.storage.get(STORAGE_KEY);
    return this.messages;
  }


}
