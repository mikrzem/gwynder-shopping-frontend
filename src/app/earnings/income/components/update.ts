import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {RoutedComponent} from '../../../common/components/routed';
import {Income} from '../services/data';
import {IncomeService} from '../services/service';

@Component({
    selector: 'income-update',
    templateUrl: 'update.html'
})
export class IncomeUpdate extends RoutedComponent {

    public request: Promise<Income>;

    public success: boolean = false;

    constructor(
        private readonly service: IncomeService,
        route: ActivatedRoute
    ) { super(route); }

    protected onParam(params: Params) {
        this.request = this.service.get(parseInt(params['id']))
    }

    protected onQuery(params: Params) {
        this.success = 'true' === params['success'];
    }

}
