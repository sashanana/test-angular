import { HttpParameterCodec } from '@angular/common/http';

export class ApiParameterCodec implements HttpParameterCodec {
  public encodeKey(k: string): string { return encodeURIComponent(k); }
  public encodeValue(v: string): string { return encodeURIComponent(v); }
  public decodeKey(k: string): string { return decodeURIComponent(k); }
  public decodeValue(v: string) { return decodeURIComponent(v); }
}