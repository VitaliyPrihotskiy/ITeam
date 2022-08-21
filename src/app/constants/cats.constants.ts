import { HttpHeaders } from '@angular/common/http';

export const GET_CATS_URL =
  'https://api.thecatapi.com/v1/images/search?limit=25&has_breeds=true';
export const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('x-api-key', 'a3675da6-635e-45b9-9ea0-b92e00d810ba');
