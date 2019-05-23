import {Component, Input} from '@angular/core';
import {Income} from '../services/data';

@Component({
    selector: 'income-display',
    templateUrl: 'display.html'
})
export class IncomeDisplay {

    @Input()
    public income: Income;

}
