import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})


export class DemoTableComponent implements OnInit {

    public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "order";
    public sortOrder = "asc";

 constructor(private http: Http) {
    }

  ngOnInit(): void {
   
 
var dataToDisplay = [
    { "Channel ID": "1256", "Site Name": "San Dleus", "Organisation": "BP", "Field": "Three Maple", "Well": "Dark Storm",  },
    { "Channel ID": "5612", "Site Name": "Bob Inc 22", "Organisation": "Chevron", "Field": "Huff Post", "Well": "Blueville",  },
    { "Channel ID": "7521", "Site Name": "Livo Grip Field", "Organisation": "BP", "Field": "Blitx G", "Well": "Bubba",  },
    { "Channel ID": "3561", "Site Name": "Amazon Salt F", "Organisation": "Total", "Field": "Fort Kent", "Well": "Gump",  },
    { "Channel ID": "4456", "Site Name": "Brookswill", "Organisation": "Total", "Field": "Will O Baen", "Well": "Shrimp", },
    { "Channel ID": "3245", "Site Name": "Hortins Lake", "Organisation": "RIL", "Field": "Grumbles Dig", "Well": "Texas Doms",  },
    { "Channel ID": "1256", "Site Name": "San Dleus", "Organisation": "BP", "Field": "Three Maple", "Well": "Dark Storm",  },
    { "Channel ID": "5612", "Site Name": "Bob Inc 22", "Organisation": "Chevron", "Field": "Huff Post", "Well": "Blueville",  },
    { "Channel ID": "7521", "Site Name": "Livo Grip Field", "Organisation": "BP", "Field": "Blitx G", "Well": "Bubba",  },
   ]
          
           this.data = dataToDisplay;
  }

   

}
