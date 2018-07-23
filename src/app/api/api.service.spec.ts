import { TestBed, inject } from '@angular/core/testing';
// Module
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AppApiServiceProvider } from './api-service.factory';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppApiServiceProvider],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
