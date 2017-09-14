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
   
/*    
this.http.get('http://angular-data-grid.github.io/demo/data.json')
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
            
*/
var dataToDisplay = [
    { "Channel ID": "1256", "Site Name": "San Dleus", "Organisation": "BP", "Field": "Three Maple", "Well": "Dark Storm", "Section": "Drill_C", "Mnemonic": "AH_D", "uidWell": "1212", "uidWellbore": "9565", "uidLog": "2150", "Last Alive Time": "03/16/2017 21:16:23", "Failure Count": "2", "Uptime": "26.22", "Depth": true, "Witsml 1311": false, "Witsml 1411": true, "Pending": false, "Color" : "R" },
    { "Channel ID": "5612", "Site Name": "Bob Inc 22", "Organisation": "Chevron", "Field": "Huff Post", "Well": "Blueville", "Section": "Cement_D", "Mnemonic": "OPS", "uidWell": "4532", "uidWellbore": "1511", "uidLog": "34545", "Last Alive Time": "03/16/2017 09:36:32", "Failure Count": "0", "Uptime": "49.26", "Depth": false, "Witsml 1311": true, "Witsml 1411": false, "Pending": true },
    { "Channel ID": "7521", "Site Name": "Livo Grip Field", "Organisation": "BP", "Field": "Blitx G", "Well": "Bubba", "Section": "Drill_A", "Mnemonic": "REF_DU", "uidWell": "43252", "uidWellbore": "42327", "uidLog": "45057", "Last Alive Time": "03/16/2017 00:14:58", "Failure Count": "128", "Uptime": "00.58", "Depth": false, "Witsml 1311": false, "Witsml 1411": true, "Pending": true },
    { "Channel ID": "3561", "Site Name": "Amazon Salt F", "Organisation": "Total", "Field": "Fort Kent", "Well": "Gump", "Section": "PAX", "Mnemonic": "AMP_O", "uidWell": "7842", "uidWellbore": "52451", "uidLog": "1241", "Last Alive Time": "03/16/2017 23:19:47", "Failure Count": "37", "Uptime": "19:41", "Depth": true, "Witsml 1311": false, "Witsml 1411": true, "Pending": false },
    { "Channel ID": "4456", "Site Name": "Brookswill", "Organisation": "Total", "Field": "Will O Baen", "Well": "Shrimp", "Section": "HSIL E", "Mnemonic": "AAA_2", "uidWell": "45987", "uidWellbore": "34614", "uidLog": "75421", "Last Alive Time": "03/16/2017 06:48:25", "Failure Count": "0", "Uptime": "03:41", "Depth": true, "Witsml 1311": false, "Witsml 1411": true, "Pending": true },
    { "Channel ID": "3245", "Site Name": "Hortins Lake", "Organisation": "RIL", "Field": "Grumbles Dig", "Well": "Texas Doms", "Section": "Scotss", "Mnemonic": "LITH_M", "uidWell": "23414", "uidWellbore": "10024", "uidLog": "8004785", "Last Alive Time": "02/09/2017 11:15:33", "Failure Count": "21", "Uptime": "54:03", "Depth": true, "Witsml 1311": false, "Witsml 1411": true, "Pending": false },
    { "Channel ID": "1256", "Site Name": "San Dleus", "Organisation": "BP", "Field": "Three Maple", "Well": "Dark Storm", "Section": "Drill_C", "Mnemonic": "AH_D", "uidWell": "1212", "uidWellbore": "9565", "uidLog": "2150", "Last Alive Time": "03/16/2017 21:16:23", "Failure Count": "2", "Uptime": "26.22", "Depth": true, "Witsml 1311": false, "Witsml 1411": true, "Pending": false },
    { "Channel ID": "5612", "Site Name": "Bob Inc 22", "Organisation": "Chevron", "Field": "Huff Post", "Well": "Blueville", "Section": "Cement_D", "Mnemonic": "OPS", "uidWell": "4532", "uidWellbore": "1511", "uidLog": "34545", "Last Alive Time": "03/16/2017 09:36:32", "Failure Count": "0", "Uptime": "49.26", "Depth": false, "Witsml 1311": true, "Witsml 1411": false, "Pending": true },
    { "Channel ID": "7521", "Site Name": "Livo Grip Field", "Organisation": "BP", "Field": "Blitx G", "Well": "Bubba", "Section": "Drill_A", "Mnemonic": "REF_DU", "uidWell": "43252", "uidWellbore": "42327", "uidLog": "45057", "Last Alive Time": "03/16/2017 00:14:58", "Failure Count": "128", "Uptime": "00.58", "Depth": false, "Witsml 1311": false, "Witsml 1411": true, "Pending": true },
    { "Channel ID": "3561", "Site Name": "Amazon Salt F", "Organisation": "Total", "Field": "Fort Kent", "Well": "Gump", "Section": "PAX", "Mnemonic": "AMP_O", "uidWell": "7842", "uidWellbore": "52451", "uidLog": "1241", "Last Alive Time": "03/16/2017 23:19:47", "Failure Count": "37", "Uptime": "19:41", "Depth": true, "Witsml 1311": false, "Witsml 1411": true, "Pending": false },
    { "Channel ID": "4456", "Site Name": "Brookswill", "Organisation": "Total", "Field": "Will O Baen", "Well": "Shrimp", "Section": "HSIL E", "Mnemonic": "AAA_2", "uidWell": "45987", "uidWellbore": "34614", "uidLog": "75421", "Last Alive Time": "03/16/2017 06:48:25", "Failure Count": "0", "Uptime": "03:41", "Depth": true, "Witsml 1311": false, "Witsml 1411": true, "Pending": true },
    { "Channel ID": "3245", "Site Name": "Hortins Lake", "Organisation": "RIL", "Field": "Grumbles Dig", "Well": "Texas Doms", "Section": "Scotss", "Mnemonic": "LITH_M", "uidWell": "23414", "uidWellbore": "10024", "uidLog": "8004785", "Last Alive Time": "02/09/2017 11:15:33", "Failure Count": "21", "Uptime": "54:03", "Depth": true, "Witsml 1311": false, "Witsml 1411": true, "Pending": false },
    { "Channel ID": "1256", "Site Name": "San Dleus", "Organisation": "BP", "Field": "Three Maple", "Well": "Dark Storm", "Section": "Drill_C", "Mnemonic": "AH_D", "uidWell": "1212", "uidWellbore": "9565", "uidLog": "2150", "Last Alive Time": "03/16/2017 21:16:23", "Failure Count": "2", "Uptime": "26.22", "Depth": true, "Witsml 1311": false, "Witsml 1411": true, "Pending": false },
    { "Channel ID": "5612", "Site Name": "Bob Inc 22", "Organisation": "Chevron", "Field": "Huff Post", "Well": "Blueville", "Section": "Cement_D", "Mnemonic": "OPS", "uidWell": "4532", "uidWellbore": "1511", "uidLog": "34545", "Last Alive Time": "03/16/2017 09:36:32", "Failure Count": "0", "Uptime": "49.26", "Depth": false, "Witsml 1311": true, "Witsml 1411": false, "Pending": true },
    { "Channel ID": "7521", "Site Name": "Livo Grip Field", "Organisation": "BP", "Field": "Blitx G", "Well": "Bubba", "Section": "Drill_A", "Mnemonic": "REF_DU", "uidWell": "43252", "uidWellbore": "42327", "uidLog": "45057", "Last Alive Time": "03/16/2017 00:14:58", "Failure Count": "128", "Uptime": "00.58", "Depth": false, "Witsml 1311": false, "Witsml 1411": true, "Pending": true },
    { "Channel ID": "3561", "Site Name": "Amazon Salt F", "Organisation": "Total", "Field": "Fort Kent", "Well": "Gump", "Section": "PAX", "Mnemonic": "AMP_O", "uidWell": "7842", "uidWellbore": "52451", "uidLog": "1241", "Last Alive Time": "03/16/2017 23:19:47", "Failure Count": "37", "Uptime": "19:41", "Depth": true, "Witsml 1311": false, "Witsml 1411": true, "Pending": false },
    { "Channel ID": "4456", "Site Name": "Brookswill", "Organisation": "Total", "Field": "Will O Baen", "Well": "Shrimp", "Section": "HSIL E", "Mnemonic": "AAA_2", "uidWell": "45987", "uidWellbore": "34614", "uidLog": "75421", "Last Alive Time": "03/16/2017 06:48:25", "Failure Count": "0", "Uptime": "03:41", "Depth": true, "Witsml 1311": false, "Witsml 1411": true, "Pending": true },
    { "Channel ID": "3245", "Site Name": "Hortins Lake", "Organisation": "RIL", "Field": "Grumbles Dig", "Well": "Texas Doms", "Section": "Scotss", "Mnemonic": "LITH_M", "uidWell": "23414", "uidWellbore": "10024", "uidLog": "8004785", "Last Alive Time": "02/09/2017 11:15:33", "Failure Count": "21", "Uptime": "54:03", "Depth": true, "Witsml 1311": false, "Witsml 1411": true, "Pending": false }
]
           //var dataToDisplay = "[\r\n    { \"Channel\": \"1256\", \"Site Name\": \"San Dleus\", \"Organisation\": \"BP\", \"Field\": \"Three Maple\", \"Well\": \"Dark Storm\", \"Section\": \"Drill_C\", \"Mnemonic\": \"AH_D\", \"uidWell\": \"1212\", \"uidWellbore\": \"9565\", \"uidLog\": \"2150\", \"Last Alive Time\": \"03\/16\/2017 21:16:23\", \"Failure Count\": \"2\", \"Uptime\": \"26.22\", \"Depth\": true, \"Witsml 1311\": false, \"Witsml 1411\": true, \"Pending\": false },\r\n    { \"Channel\": \"5612\", \"Site Name\": \"Bob Inc 22\", \"Organisation\": \"Chevron\", \"Field\": \"Huff Post\", \"Well\": \"Blueville\", \"Section\": \"Cement_D\", \"Mnemonic\": \"OPS\", \"uidWell\": \"4532\", \"uidWellbore\": \"1511\", \"uidLog\": \"34545\", \"Last Alive Time\": \"03\/16\/2017 09:36:32\", \"Failure Count\": \"0\", \"Uptime\": \"49.26\", \"Depth\": false, \"Witsml 1311\": true, \"Witsml 1411\": false, \"Pending\": true },\r\n     \r\n]";

            //this.data = JSON.parse(xxxJson);
           // this.data = JSON.parse(dataToDisplay);
           this.data = dataToDisplay;
  }

   

}
