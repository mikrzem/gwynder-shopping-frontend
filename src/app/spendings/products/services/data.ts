import {BaseData} from '../../../common/services/data';
import {SpendingCategory} from '../../categories/services/data';

export interface Product extends BaseData {

    category: SpendingCategory;
    name: string;

}
