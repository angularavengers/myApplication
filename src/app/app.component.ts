import { Component, OnInit } from '@angular/core';
import {Artical} from './model/artical'
import { trigger, transition, style, animate, state, query, stagger, keyframes } from '@angular/animations';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { getRenderedText } from '@angular/core/src/render3';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('openClose', [

      transition('void => *', [
        style({ backgroundColor: 'green', opacity: 0, transform: 'rotateX(180deg)' }),
        animate('1s')
      ]),
      transition('* => void', [
        //style({ backgroundColor: 'red', opacity: 0, transform: 'rotateX(180deg)' }),
        animate('1s', keyframes([
           style({transform:'translateX(-10%)'}),
           style({transform:'translateX(10%)'}),
           style({transform:'translateX(-10%)'}),
           style({transform:'translateX(10%)'})
        ])
        )   
    // ]),
    // trigger('openCloseNew', [
    //   // ...
    //   // state('open', style({
    //   //   height: '200px',
    //   //   opacity: 1,
    //   //   backgroundColor: 'red'
    //   // })),
    //   // state('closed', style({
    //   //   position:'relative',
    //   //   height: '100px',
    //   //   display:'none',
    //   //   opacity: 1,
    //   //   backgroundColor: 'blue'
    //   // })),
    //   transition('* => closed', [
    //             animate('1s',style({
    //               backgroundColor:'green',
    //               color:'red',
    //               opacity:0,
                
    //             }))
    //   ]),
    //   transition('closed => open', [
        
    //     animate('1s ease-out')
    //   ]),
    // ]),
    // query(':enter', stagger('300ms', [
    //   animate('.6s ease-in', keyframes([
    //     style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
    //     style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
    //     style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
    //   ]))]), {optional: true})
    //   ,
    // query(':leave', stagger('300ms', [
    //   animate('.6s ease-out', keyframes([
    //     style({opacity: 1, transform: 'translateY(0)', offset: 0}),
    //     style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
    //     style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
    //   ]))]), {optional: true})

  ]
})
export class AppComponent implements OnInit{
  title = 'TestPro';
  users = [];
  constructor(){
    this.users = [new Artical("Sourabh Sahu","Link1"),new Artical("Mayuresh bhide","Link1",1),new Artical("Lokesh Badgujar","Link1",3)];
       console.log(this.users)
    }
    isOpen = true;
 
  toggle() {
    this.isOpen = !this.isOpen;
  }
   
    ngOnInit(){
      
      
    }
    onclick(i){
      this.users.splice(i,1)
    }
    addItem(title,link){
      this.users.push(new Artical(title.value,link.value));
    }
}
