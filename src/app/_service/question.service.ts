import { environment } from '../../environments/environment.prod';
import { Injectable } from "@angular/core";
import {Question} from "../_model/question";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class QuestionService{

  questions: Question[];

  constructor(
    private http: HttpClient,
  ) { }

  initializeQuestions(): void {

    this.questions = [
      {
        id: 1,
        title: "Choose the age rating?",
        subtitle: "",
        isMultiSelect: false,
        answers: [
          {
            id: 1,
            title: "General Audiences",
            subtitle: "Any age (even below 12)",
            value: "<12",
            imagePath: "../../assets/ag.png"
          },
          {
            id: 2,
            title: "Only with parental consent below 12",
            subtitle: "",
            value: "12-15",
            imagePath: "../../assets/ap12.png"
          },
          {
            id: 3,
            title: "Not recommended below 15",
            subtitle: "",
            value: ">15",
            imagePath: "../../assets/n15.png"
          }
        ]
      },
      {
        id: 2,
        title: "Who are you watching with?",
        subtitle: "",
        isMultiSelect: true,
        answers: [
          {
            id: 1,
            title: "Alone",
            subtitle: "",
            value: "alone",
            imagePath: "../../assets/alone.png"
          },
          {
            id: 2,
            title: "With friends",
            subtitle: "",
            value: "friends",
            imagePath: "../../assets/friends.png"
          },
          {
            id: 3,
            title: "With family",
            subtitle: "",
            value: "family",
            imagePath: "../../assets/family.png"
          }
        ]
      },
      {
        id: 3,
        title: "What movie genre do you prefer?",
        subtitle: "Choose multiple options",
        isMultiSelect: true,
        answers: [
          {
            id: 1,
            title: "Drama",
            subtitle: "",
            value: "drama",
            imagePath: "../../assets/drama.png"
          },
          {
            id: 2,
            title: "Action",
            subtitle: "",
            value: "action",
            imagePath: "../../assets/war.png"
          },
          {
            id: 3,
            title: "Horror",
            subtitle: "",
            value: "horror",
            imagePath: "../../assets/horror.png"
          },
          {
            id: 4,
            title: "Comedy",
            subtitle: "",
            value: "comedy",
            imagePath: "../../assets/comedy.png"
          },
          {
            id: 5,
            title: "Romance",
            subtitle: "",
            value: "romance",
            imagePath: "../../assets/romance.png"
          },
          {
            id: 6,
            title: "Thriller",
            subtitle: "",
            value: "thriller",
            imagePath: "../../assets/thriller.png"
          },
          {
            id: 7,
            title: "Sci-Fi",
            subtitle: "",
            value: "sci-fi",
            imagePath: "../../assets/scifi.png"
          },
          {
            id: 8,
            title: "Documentary",
            subtitle: "",
            value: "documentary",
            imagePath: "../../assets/documentary.png"
          },
          {
            id: 9,
            title: "Mystery",
            subtitle: "",
            value: "mystery",
            imagePath: "../../assets/crime.png"
          },
          {
            id: 10,
            title: "Animation",
            subtitle: "",
            value: "animation",
            imagePath: "../../assets/animation.png"
          }
        ]
      },
      {
        id: 4,
        title: "Do you have a favorite movie studio?",
        subtitle: "",
        isMultiSelect: false,
        answers: [
          {
            id: 1,
            title: "A24",
            subtitle: "",
            value: "A24",
            imagePath: "../../assets/a24.png"
          },
          {
            id: 2,
            title: "Pixar",
            subtitle: "",
            value: "Pixar",
            imagePath: "../../assets/pixar.png"
          },
          {
            id: 3,
            title: "Warner Bros.",
            subtitle: "",
            value: "Warner Bros",
            imagePath: "../../assets/wb.png"
          },
          {
            id: 4,
            title: "Paramount Pictures",
            subtitle: "",
            value: "Paramount Pictures",
            imagePath: "../../assets/paramount.png"
          },
          {
            id: 5,
            title: "Universal Pictures",
            subtitle: "",
            value: "Universal Pictures",
            imagePath: "../../assets/universal.png"
          },
          {
            id: 6,
            title: "Marvel",
            subtitle: "",
            value: "marvel",
            imagePath: "../../assets/marvel.png"
          },
          {
            id: 7,
            title: "Metro-Goldwyn-Mayer",
            subtitle: "",
            value: "Metro-Goldwyn-Mayer",
            imagePath: "../../assets/mgm.png"
          },
          {
            id: 8,
            title: "Dream Works",
            subtitle: "",
            value: "DreamWorks",
            imagePath: "../../assets/dreamworks.png"
          },
          {
            id: 9,
            title: "Miramax Films",
            subtitle: "",
            value: "Miramax Films",
            imagePath: "../../assets/miramax.png"
          },
          {
            id: 10,
            title: "Other",
            subtitle: "",
            value: "",
            imagePath: "../../assets/other.png"
          }
        ]
      },
      {
        id: 5,
        title: "Do you like movie franchises?",
        subtitle: "",
        isMultiSelect: false,
        answers: [
          {
            id: 1,
            title: "Yes",
            subtitle: "",
            value: "yes",
            imagePath: "../../assets/franchise.png"
          },
          {
            id: 2,
            title: "No",
            subtitle: "",
            value: "no",
            imagePath: "../../assets/notFranchise.png"
          }
        ]
      },
      {
        id: 6,
        title: "How long do you like your movies?",
        subtitle: "",
        isMultiSelect: false,
        answers: [
          {
            id: 1,
            title: "Below 2 hours",
            subtitle: "",
            value: "<=2h",
            imagePath: "../../assets/below2.png"
          },
          {
            id: 2,
            title: "Over 2 hours",
            subtitle: "",
            value: ">2h,<3h",
            imagePath: "../../assets/over2.png"
          },
          {
            id: 3,
            title: "Over 3 hours",
            subtitle: "",
            value: ">=3h",
            imagePath: "../../assets/over3.png"
          }
        ]
      },
      {
        id: 7,
        title: "Do you have a favorite actor?",
        subtitle: "",
        isMultiSelect: false,
        answers: [
          {
            id: 1,
            title: "Leonardo Dicaprio",
            subtitle: "",
            value: "Leonardo Dicaprio",
            imagePath: "../../assets/dicaprio.png"
          },
          {
            id: 2,
            title: "Ingrid Bergman",
            subtitle: "",
            value: "Ingrid Bergman",
            imagePath: "../../assets/bergman.png"
          },
          {
            id: 3,
            title: "Johnny Depp",
            subtitle: "",
            value: "Johnny Depp",
            imagePath: "../../assets/depp.png"
          },
          {
            id: 4,
            title: "Meryl Streep",
            subtitle: "",
            value: "Meryl Streep",
            imagePath: "../../assets/streep.png"
          },
          {
            id: 5,
            title: "Jack Nicholson",
            subtitle: "",
            value: "Jack Nicholson",
            imagePath: "../../assets/nicholson.png"
          },
          {
            id: 6,
            title: "Adam Sandler",
            subtitle: "",
            value: "Adam Sandler",
            imagePath: "../../assets/sandler.png"
          },
          {
            id: 7,
            title: "Kate Winslet",
            subtitle: "",
            value: "Kate Winslet",
            imagePath: "../../assets/winslet.png"
          },
          {
            id: 8,
            title: "Daniel Day-Lewis",
            subtitle: "",
            value: "Daniel Day-Lewis",
            imagePath: "../../assets/daylewis.png"
          },
          {
            id: 9,
            title: "Robert De Niro",
            subtitle: "",
            value: "Robert De Niro",
            imagePath: "../../assets/deniro.png"
          },
          {
            id: 10,
            title: "Jackie Chan",
            subtitle: "",
            value: "Jackie Chan",
            imagePath: "../../assets/chan.png"
          },
          {
            id: 11,
            title: "Other",
            subtitle: "",
            value: "",
            imagePath: "../../assets/other.png"
          }
        ]
      },
      {
        id: 8,
        title: "Do you have a favorite director?",
        subtitle: "",
        isMultiSelect: false,
        answers: [
          {
            id: 1,
            title: "Alfred Hitchcock",
            subtitle: "",
            value: "Alfred Hitchcock",
            imagePath: "../../assets/hitchcock.png"
          },
          {
            id: 2,
            title: "Martin Scorsese",
            subtitle: "",
            value: "Martin Scorsese",
            imagePath: "../../assets/scorsese.png"
          },
          {
            id: 3,
            title: "Steven Spielberg",
            subtitle: "",
            value: "Steven Spielberg",
            imagePath: "../../assets/spielberg.png"
          },
          {
            id: 4,
            title: "Stanley Kubrick",
            subtitle: "",
            value: "Stanley Kubrick",
            imagePath: "../../assets/kubrick.png"
          },
          {
            id: 5,
            title: "Christopher Nolan",
            subtitle: "",
            value: "Christopher Nolan",
            imagePath: "../../assets/nolan.png"
          },
          {
            id: 6,
            title: "Quentin Tarantino",
            subtitle: "",
            value: "Quentin Tarantino",
            imagePath: "../../assets/tarantino.png"
          },
          {
            id: 7,
            title: "Spike Lee",
            subtitle: "",
            value: "Spike Lee",
            imagePath: "../../assets/lee.png"
          },
          {
            id: 8,
            title: "Edgar Wright",
            subtitle: "",
            value: "Edgar Wright",
            imagePath: "../../assets/wright.png"
          },
          {
            id: 9,
            title: "Other",
            subtitle: "",
            value: "",
            imagePath: "../../assets/other.png"
          }
        ]
      }
    ]
  }

  getRecommendedMovie(facts: any): Observable<any> {

    let factsBody = {
      "facts": facts
    }

    return this.http.post(`${environment.apiUrl}/detect`, factsBody, { responseType: 'text' })
  }
}
