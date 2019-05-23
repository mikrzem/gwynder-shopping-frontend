import {Component, Input} from '@angular/core';
import {Income} from '../services/data';

@Component({
    selector: 'income-list',
    templateUrl: 'list.html'
})
export class IncomeList {

    public current: Income[] = [];

    @Input() set list(list: Income[]) {
        if (!list) {
            this.current = [];
        } else {
            this.current = list.sort((p1, p2) => p1.date.localeCompare(p2.date) * -1);
        }
    }
}
