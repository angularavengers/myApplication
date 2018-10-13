import { Component, OnInit, Input } from '@angular/core';
import { Artical } from '../model/artical';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
 
 @Input() article:Artical

  constructor() 
   {
    
   }

  ngOnInit() {
    
  }


}
