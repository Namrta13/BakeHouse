import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
    //default = 0;
    count: number = 0;
    logout: boolean = false;
    constructor(private SharedServ: SharedService){

    }
    ngOnInit() {
       this.SharedServ.count.subscribe((val) => {
           this.count = val;
       })
    }

    onLogout(){
          this.logout = !this.logout;
    }

    onLogin(){
        this.logout = true;
    }
}