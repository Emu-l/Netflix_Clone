import React from "react";
import Row from "../Row/Row";
import Requests from "../../../Utils/Requests";
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX_ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRatedMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="TV Shows" fetchUrl={Requests.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocomentaries} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
    </>
  );
};

export default RowList;
