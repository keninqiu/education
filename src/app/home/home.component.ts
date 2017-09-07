import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chat-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.scss'],
      host: {
        '(window:resize)': 'onResize($event)'
      }    
})
export class HomeComponent implements OnInit {
    constructor() {
    }
    current:number = 1;
    col_num:number = 2;
    setColNum() {
        this.col_num = 3;
        var width = window.innerWidth;
        if(width <= 400) {
            this.col_num = 1;
        }
        else if (width <= 800) {
            this.col_num = 2;
        }    
    }
    ngOnInit() { 
        this.setColNum();
    }
    options = {
        login:1,
        register:1,
        chat:1
    }
    select(selection):void {
        this.options.login = 0;
        this.options.register = 0;
        this.options.chat = 0;
        this.options[selection] = 3;
        
    }

    onResize(event){
        this.setColNum();
    }
}