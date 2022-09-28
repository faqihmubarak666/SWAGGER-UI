//SERVICE PAGE TRENDING\\

const getTrending = async () => {
  const trendingMovie = await fetch(
    `${process.env.REACT_APP_URL_MOVIE}/trending/all/day?api_key=${process.env.REACT_APP_URL_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return await trendingMovie.json();
};

const getDetailTrending = async (idMovie) => {
  const detailTrending = await fetch(
    `${process.env.REACT_APP_URL_MOVIE}/movie/${idMovie}?api_key=${process.env.REACT_APP_URL_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return await detailTrending.json();
};

const getTrailerTrending = async (idMovie) => {
  const trailerTrending = await fetch(
    `${process.env.REACT_APP_URL_MOVIE}/movie/${idMovie}/videos?api_key=${process.env.REACT_APP_URL_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return await trailerTrending.json();
};

//SERVICE PAGE COMING SOON\\

const getComingsoon = async () => {
  const comingsoon = await fetch(
    `${process.env.REACT_APP_URL_MOVIE}/movie/upcoming?api_key=${process.env.REACT_APP_URL_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return await comingsoon.json();
};

const getDetailComingsoon = async (idMovie) => {
  const detailComingsoon = await fetch(
    `${process.env.REACT_APP_URL_MOVIE}/movie/${idMovie}?api_key=${process.env.REACT_APP_URL_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return await detailComingsoon.json();
};

const getTrailerComingsoon = async (idMovie) => {
  const trailerComingsoon = await fetch(
    `${process.env.REACT_APP_URL_MOVIE}/movie/${idMovie}/videos?api_key=${process.env.REACT_APP_URL_KEY}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return await trailerComingsoon.json();
};

export {
  getTrending,
  getDetailTrending,
  getTrailerTrending,
  getComingsoon,
  getDetailComingsoon,
  getTrailerComingsoon,
};
