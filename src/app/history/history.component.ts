import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { History } from '../user/history';
import { HistoryService } from '../user/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{
 
  historyList: History[] = [];
 
  constructor(private historyService:HistoryService){
  }
  ngOnInit(): void {
    this.getHistory();
  }
  /*getHistory() :void{
    this.historyService.getHistoryList()
      .subscribe(history => {
        this.historyList = history;
      });
  }*/
  
 
  getHistory() {
    this.historyService.getHistoryList().subscribe(data  => {
        console.log(data);
        this.historyList = data;
        
        },
      error => {
        console.error('Error fetching history:', error);
      }
    
  )}


}
