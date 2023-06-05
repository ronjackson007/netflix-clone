import React from "react";
import Banner from "./comp/Banner";
import Nav from "./comp/Nav";
import Rows from "./comp/Rows";
import requests from "./Request";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Rows
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Rows title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Rows title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Rows title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />{" "}
      <Rows title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />{" "}
      <Rows title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
