import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseCatalogService} from '../../../common/services/service';
import {UrlService} from '../../../common/services/url';
import {SpendingCategory} from './data';

@Injectable()
export class SpendingCategoryService extends BaseCatalogService<SpendingCategory> {

    constructor(
        client: HttpClient,
        urlService: UrlService
    ) { super(client, urlService, 'spendings/categories')}

    public display(category: SpendingCategory): string {
        if (category.parent) {
            return this.display(category.parent) + ' / ' + category.name;
        } else {
            return category.name;
        }
    }

}
