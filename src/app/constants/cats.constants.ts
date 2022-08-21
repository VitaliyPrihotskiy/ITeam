import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('x-api-key', environment.x_api_key);

export const params = new HttpParams()
  .set('limit', '25')
  .set('has_breeds', 'true')
  .set('order', 'ASC');
