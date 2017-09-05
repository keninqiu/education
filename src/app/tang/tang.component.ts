import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chat-tang',
    templateUrl: './tang.component.html',
    styleUrls:['./tang.scss']
})
export class TangComponent implements OnInit {
    constructor() { }
    current:number = 1;
    ngOnInit() { }
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
}