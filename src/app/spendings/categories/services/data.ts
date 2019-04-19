import {BaseData} from '../../../common/services/data';

export interface SpendingCategory extends BaseData {

    parent?: SpendingCategory;
    name: string

}
