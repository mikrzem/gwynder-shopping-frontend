import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {RoutedComponent} from '../../../common/components/routed';
import {Purchase} from '../services/data';
import {PurchaseService} from '../services/service';

@Component({
    selector: 'purchase-update',
    templateUrl: 'update.html'
})
export class PurchaseUpdate extends RoutedComponent {

    public request: Promise<Purchase>;

    public success: boolean = false;

    constructor(
        private readonly service: PurchaseService,
        route: ActivatedRoute
    ) {
        super(route);
    }

    protected onParam(params: Params) {
        this.request = this.service.get(parseInt(params['id']))
    }

    protected onQuery(params: Params) {
        this.success = 'true' === params['success'];
    }
}
