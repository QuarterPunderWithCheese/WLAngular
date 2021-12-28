import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(movies);

  constructor() {
  }

  search(query: string) {
    if (query.length < 1) return this.movies$.next([]);
    const res = movies.filter(movie => movie.title.toLowerCase().startsWith(query));
    if (res.length === 0) return this.movies$.next([{title: "Фильм не найден", thumbnail_url: "/assets/blank.png"}])
    this.movies$.next(res)
  }
}

const movies: Movie[] = [
  {
    title: "Минари",
    thumbnail_url: "assets/img.png",
    date: 2020
  },
  {
    title: "Солнцестояние",
    thumbnail_url: "assets/img_1.png",
    date: 2020
  },
  {
    title: "Манк",
    thumbnail_url: "assets/img_2.png",
    date: 2020
  },
  {
    title: "Девушка, подающая надежды",
    thumbnail_url: "assets/img_3.png",
    date: 2020
  }
]

export interface Movie {
  title: string,
  thumbnail_url: string,
  date?: number
}
