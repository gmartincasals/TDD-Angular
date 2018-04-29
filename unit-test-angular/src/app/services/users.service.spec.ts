import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  // Arrange
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
