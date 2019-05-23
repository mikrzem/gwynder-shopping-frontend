import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseCatalogService} from '../../../common/services/service';
import {UrlService} from '../../../common/services/url';
import {IncomeSource} from './data';

@Injectable()
export class IncomeSourceService extends BaseCatalogService<IncomeSource> {

    constructor(
        client: HttpClient,
        urlService: UrlService
    ) { super(client, urlService, 'earnings/sources')}

}
