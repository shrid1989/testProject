import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../product-details/product'
//import 'rxjs/add/operator/map';



@Injectable()
export class DataService {

    private actionUrl: string;

    constructor(private http: HttpClient) {
        this.actionUrl = 'http://18.207.119.173:3000/getProducts';
    }

    public getAll<IProduct>(): Observable<IProduct> {
        return this.http.get<IProduct>(this.actionUrl);
    }

    // public getSingle<T>(id: number): Observable<T> {
    //     return this.http.get<T>(this.actionUrl + id);
    // }

    // public add<T>(itemName: string): Observable<T> {
    //     const toAdd = JSON.stringify({ ItemName: itemName });

    //     return this.http.post<T>(this.actionUrl, toAdd);
    // }

    // public update<T>(id: number, itemToUpdate: any): Observable<T> {
    //     return this.http
    //         .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
    // }

    // public delete<T>(id: number): Observable<T> {
    //     return this.http.delete<T>(this.actionUrl + id);
    // }
}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    }
}