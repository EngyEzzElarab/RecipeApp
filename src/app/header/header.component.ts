import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent {
    collapsed = true;
    toggled:boolean=false;
    public toggle()
    {
        this.toggled=!this.toggled;
       
    }

}