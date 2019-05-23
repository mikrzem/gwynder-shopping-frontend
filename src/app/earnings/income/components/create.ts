import {Component} from '@angular/core';
import * as moment from 'moment';
import {Income} from '../services/data';

@Component({
    selector: 'income-create',
    templateUrl: 'create.html'
})
export class IncomeCreate {

    public income: Income = {
        source: null,
        date: moment().format('YYYY-MM-DD'),
        income: null
    };

}
