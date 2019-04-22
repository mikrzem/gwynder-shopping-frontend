import {Component, Input} from '@angular/core';
import {Purchase} from '../services/data';
import {PurchaseService} from '../services/service';

@Component({
    selector: 'purchase-edit',
    templateUrl: 'edit.html'
})
export class PurchaseEdit {

    @Input() public purchase: Purchase;

    constructor(
        private readonly service: PurchaseService
    ) { }

}
