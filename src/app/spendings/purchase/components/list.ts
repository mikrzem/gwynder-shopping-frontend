import {Component, Input} from '@angular/core';
import {Purchase} from '../services/data';

@Component({
    selector: 'purchase-list',
    templateUrl: 'list.html'
})
export class PurchaseList {

    public current: Purchase[] = [];

    @Input() set list(list: Purchase[]) {
        if (!list) {
            this.current = [];
        } else {
            this.current = list.sort((p1, p2) => p1.date.localeCompare(p2.date) * -1);
        }
    }

}
