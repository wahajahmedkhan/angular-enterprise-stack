import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserReqresService } from './user-reqres.service';

describe('UserReqresService', () => {
  let service: UserReqresService;
  let httpClientSpy: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: {
            get: () => jest.fn(),
          },
        },
        UserReqresService,
      ],
    });
    service = TestBed.inject(UserReqresService);
    httpClientSpy = TestBed.inject(HttpClient);
  });

  it('should fetch 10 users by default', () => {
    const mockResponse = { data: [] };
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(mockResponse) as any);

    service.fetchUserList().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    expect(httpClientSpy.get).toHaveBeenCalledWith(
      'https://reqres.in/api/users?page=1&per_page=10',
    );
  });

  it('should fetch 50 users for random selection', () => {
    const mockResponse = { data: [] };
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(mockResponse) as any);

    service.fetchUserList(true).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    expect(httpClientSpy.get).toHaveBeenCalledWith(
      'https://reqres.in/api/users?page=1&per_page=50',
    );
  });
});
