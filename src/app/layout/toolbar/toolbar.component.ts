import { Component, OnInit, style, ViewChild } from '@angular/core';

@Component({
    selector: 'chat-toolbar',
    templateUrl: './toolbar.component.html',
    styles: [`
        md-toolbar{
            margin-bottom: 4px;
        }

    `
    ]
})
export class ToolbarComponent implements OnInit {
    constructor() { }
  
    ngOnInit() { }
}