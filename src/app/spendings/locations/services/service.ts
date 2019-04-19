import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseCatalogService} from '../../../common/services/service';
import {UrlService} from '../../../common/services/url';
import {SpendingLocation} from './data';

@Injectable()
export class SpendingLocationService extends BaseCatalogService<SpendingLocation> {

    constructor(
        client: HttpClient,
        urlService: UrlService
    ) { super(client, urlService, 'spendings/locations')}

}
