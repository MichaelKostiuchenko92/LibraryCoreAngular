import { AllLibrary } from './all-library.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';


@Injectable()
export class AllLibraryService extends BehaviorSubject<any[]> {

    private url = "/api/library";

    constructor(private http: HttpClient) {
        super([]);
    }

    private data: any[] = [];

    public read() {
        if (this.data.length) {
            return super.next(this.data);
        }

        this.fetch()
            .pipe(
                tap(data => {
                    this.data = data;
                })
            )
            .subscribe(data => {
                super.next(data);
            });
    }


    private reset() {
        this.data = [];
    }

    private fetch(action: string = '', data?: any): Observable<any[]> {
        if (action == '') {
            return this.http.get(this.url)
                    .pipe(map(res => <any[]>res));
        }
    }

    private serializeModels(data?: any): string {
        return data ? `&models=${JSON.stringify([data])}` : '';
    }
}
