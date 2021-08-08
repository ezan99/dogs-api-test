import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogBreedService {

  constructor(private http: HttpClient) { }
  
  getBreedsPic(): Observable<any> {
    return this.http.get<any>('https://dog.ceo/api/breeds/image/random/5')
    .pipe(
      catchError(this.handleError('getBreedsPic', []))
    );
}

searchByBreed(breed): Observable<any> {
  return this.http.get<any>('https://dog.ceo/api/breed/' + breed + '/images/random/1')
  .pipe(
    catchError(this.handleError('getBreedsPic', []))
  );
}

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          return of(result as T);
        };
      }
  
}
