import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('➡️ Outgoing Request:', req.url);

    // Clone the request to add a custom header
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer dummy-token-12345', // add fake token
        'Content-Type': 'application/json'
      }
    });

    // Log the modified request
    console.log('🛠️ Modified Request Headers:', clonedReq.headers);

    // Send the cloned request
    return next.handle(clonedReq);
  }
}
