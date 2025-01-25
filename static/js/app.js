import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import showdown from "showdown";

function initApp(api) {
  const app = express();

  app.use(expressEjsLayouts);
  app.set("view engine", "ejs");
  app.set("views", "./templates");

  const converter = new showdown.Converter();

  app.get("/", async (request, response) => {
    response.render("index", {
      layout: "./layouts/index-layout",
      title: "Retro - biografen som visar filmer från förr -",
      description:
        "Retro biografen ligger i västerås och visar filmer från förr",
      keywords:
        "Biograf,retro, 50-tal, 70-tal, 80-tal, 90-tal, 00-tal, Västerås",
    });
  });

  app.get("/about", async (request, response) => {
    response.render("about", {
      layout: "./layouts/about-layout",
      title: "Om ossida",
      description:
        "Retro biografen ligger i västerås och visar filmer från förr",
      keywords:
        "Biograf,retro, 50-tal, 70-tal, 80-tal, 90-tal, 00-tal, Västerås",
    });
  });

  app.get("/contact", async (request, response) => {
    response.render("contact", {
      layout: "./layouts/contact-layout",
      title: "Kontaktsida",
      description:
        "Retro biografen ligger i västerås och visar filmer från förr",
      keywords:
        "Biograf,retro, 50-tal, 70-tal, 80-tal, 90-tal, 00-tal, Västerås",
    });
  });

  app.get("/cafe", async (request, response) => {
    response.render("cafe", {
      layout: "./layouts/cafe-layout",
      title: "Kafesida",
      description:
        "Retro biografen ligger i västerås och visar filmer från förr",
      keywords:
        "Biograf,retro, 50-tal, 70-tal, 80-tal, 90-tal, 00-tal, Västerås",
    });
  });

  app.get("/movies", async (request, response) => {
    try {
      const movies = await api.loadMovies();
      // Convert the intro text for each movie from Markdown to HTML
      const moviesWithMarkdown = movies.map((movie) => ({
      ...movie,
      intro: converter.makeHtml(movie.intro),
      }));

      console.log(moviesWithMarkdown);

      response.render("movies", {
        layout: "./layouts/movies-layout",
        title: "Filmsida",
        description:
          "Retro biografen ligger i Västerås och visar filmer från förr",
        keywords:
          "Biograf,retro, 50-tal, 70-tal, 80-tal, 90-tal, 00-tal, Västerås",
        movies: moviesWithMarkdown,
        //movies,
      });
    } catch (error) {
      console.error("Error fetching all movies:", error);
      response.status(500).send("Error fetching all movies.");
    }
  });

  app.get("/movies/:movieId", async (request, response) => {
    try {
      const movie = await api.loadMovie(request.params.movieId);

      if (!movie) {
        return response.status(404).render("404", {
          layout: "main", // Standardlayout or no layout at all
          title: "404 - Page Not Found",
        });
      }

      movie.intro = converter.makeHtml(movie.intro);

      response.render("movie", {
        layout: "./layouts/movie-layout",
        title: movie.title,
        description:
          "Retro biografen ligger i Västerås och visar filmer från förr",
        keywords:
          "Biograf,retro, 50-tal, 70-tal, 80-tal, 90-tal, 00-tal, Västerås",
        movie,
      });
    } catch (error) {
      console.error("Error fetching the movie:", error);
      response.status(404).render("404", {
        layout: "./layouts/main",
        title: "404 – Page Not Found",
      });
    }
  });

  app.use("/static", express.static("./static"));

  return app;
} //ends initApp

export default initApp;
