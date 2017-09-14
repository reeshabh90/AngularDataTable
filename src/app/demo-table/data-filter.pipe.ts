import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {

    transform(array: any[], filterQuery: string): any {
        if (filterQuery) {
            return _.filter(array, row=>row.Channel.indexOf(filterQuery)> -1);
        }
        return array;
    }
}