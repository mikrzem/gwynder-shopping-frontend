import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PageRequest, PageResponse} from '../services/paging';

@Component({
    selector: 'paging-controls',
    templateUrl: 'paging.controls.html'
})
export class PagingControls {

    @Output()
    public requestChange = new EventEmitter<PageRequest>();

    public pageList: number[] = [];

    private _request: PageRequest;

    get request() {
        if (this._request) {
            return this._request;
        } else {
            return {
                page: 0,
                pageSize: 10,
                oldestFirst: true
            }
        }
    }

    @Input()
    set request(request: PageRequest) {
        this._request = request;
        this.checkPages();
    }

    private _response: PageResponse<any>;

    get response() {
        if (this._response) {
            return this._response;
        } else {
            return {
                data: [],
                page: 0,
                pageSize: 10,
                count: 0,
                totalPages: 0
            };
        }
    }

    @Input()
    set response(response: PageResponse<any>) {
        this._response = response;
        this.checkPages();
    }

    get pageSize() {
        return this.request.pageSize;
    }

    set pageSize(size: number) {
        this.request.pageSize = size;
        this.requestChange.emit(this.request);
    }

    get page() {
        return this.request.page;
    }

    set page(page: number) {
        this.request.page = page;
        this.requestChange.emit(this.request);
        this.checkPages();
    }

    get isFirst() {
        return this.page === 0;
    }

    get isLast() {
        return this.page === this.lastPage;
    }

    get lastPage() {
        return this.response.totalPages ? this.response.totalPages - 1 : 0;
    }

    private checkPages() {
        if (!this.request || !this.response) {
            this.pageList = [];
        } else {
            let first = this.page - 5;
            let last = this.page + 5;
            if (first < 0) {
                last = last - first;
                first = 0;
            }
            if (last > this.lastPage) {
                first = first - (last - (this.lastPage));
                last = this.lastPage;
            }
            if (first < 0) {
                first = 0;
            }
            const pages = [];
            for (let page = first; page <= last; page++) {
                pages.push(page);
            }
            this.pageList = pages;
        }
    }
}
