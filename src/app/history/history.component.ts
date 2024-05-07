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

 
getAttachmentUrl(attachmentPath: string): string {
  attachmentPath = attachmentPath.replace(/\\/g, '/');
  
  
  const baseUrl = 'http://localhost:4200/';

  return baseUrl + encodeURIComponent(attachmentPath);
}
/*getAttachmentUrl(attachmentPath: string): string {
  if (attachmentPath) {
      attachmentPath = attachmentPath.replace(/\\/g, '/');
      
     
      if (attachmentPath.startsWith('http://') || attachmentPath.startsWith('https://')) {
          return attachmentPath; // If it's already a URL, return it as is
      } else {
          return attachmentPath = attachmentPath.replace(/\\/g, '/');// 'http://localhost:4200/' + encodeURIComponent(attachmentPath); Modify the base URL as needed
      }
  } else {
      
      return ''; // or return some default URL or handle it based on your requirements
  }*/
}







