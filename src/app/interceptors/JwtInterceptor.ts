import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { headers } from '../constants/cats.constants';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isApiUrl = request.url.startsWith(environment.cat_api_url);
        if (isApiUrl) {
            request = request.clone({
                headers:  headers 
            });
        }
        return next.handle(request);
    }
}