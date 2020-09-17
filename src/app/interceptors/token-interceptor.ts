import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    constructor(private readonly authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const jwtToken = this.authService.token;
        const headers = this.addToken(req, jwtToken);
        if (jwtToken) {
            return next.handle(headers).pipe(catchError(error => {
                if (error instanceof HttpErrorResponse && error.status === 401 || error.status === 403) {
                    console.error(error);
                    return throwError(error);
                } else {
                    return next.handle(headers);
                }
            }));
        }

        return next.handle(req);
    }

    addToken(req: HttpRequest<any>, jwtToken: any) {
        return req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + jwtToken)
        });
    }
}
