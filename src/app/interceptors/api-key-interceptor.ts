import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('x-api-key', environment.x_api_key);

        const isApiUrl = request.url.startsWith(environment.cat_api_url);
        if (isApiUrl) {
            request = request.clone({
                headers: headers
            });
        }
        return next.handle(request);
    }
}