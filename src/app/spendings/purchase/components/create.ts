import {Component} from '@angular/core';
import * as moment from 'moment';
import {Purchase} from '../services/data';

@Component({
    selector: 'purchase-create',
    templateUrl: 'create.html'
})
export class PurchaseCreate {

    public purchase: Purchase = {
        date: moment().format('YYYY-MM-DD'),
        products: [],
        location: null,
        manualTotal: false,
        category: null,
        total: 0
    }

}
