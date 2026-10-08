const movies = [
  {
    id: "project-hail-mary",
    title: "Project Hail Mary",
    year: 2026,
    poster: "project-hail-mary.jpg",
    mrp: 9.5,

    genres: [
      "Sci-Fi",
      "Adventure"
    ],

    categories: [
      "Highly Rated",
      "Adventure",
      "Space"
    ],

    synopsis: "A spoiler-free short description of the movie goes here.",

    reviewAvailable: true,
    reviewVideo: "YOUR_YOUTUBE_VIDEO_ID",

    mainPeople: [
      {
        name: "Ryan Gosling",
        profession: "Actor",
        image: "ryan-gosling.jpg"
      }
    ],

    similarMovies: [
      "movie-2",
      "movie-3"
    ]
  },

  {
    id: "movie-2",
    title: "Movie 2",
    year: 2025,
    poster: "movie-2.jpg",
    mrp: 8.2,

    genres: [
      "Action",
      "Thriller"
    ],

    categories: [
      "Popular Movies",
      "Action"
    ],

    synopsis: "Short spoiler-free description.",

    reviewAvailable: false,
    reviewVideo: "",

    mainPeople: [],

    similarMovies: [
      "project-hail-mary"
    ]
  },

  {
    id: "movie-3",
    title: "Movie 3",
    year: 2025,
    poster: "movie-3.jpg",
    mrp: 7.8,

    genres: [
      "Comedy"
    ],

    categories: [
      "Funny & Fun",
      "Feel Good"
    ],

    synopsis: "Short spoiler-free description.",

    reviewAvailable: false,
    reviewVideo: "",

    mainPeople: [],

    similarMovies: [
      "project-hail-mary"
    ]
  }
];
