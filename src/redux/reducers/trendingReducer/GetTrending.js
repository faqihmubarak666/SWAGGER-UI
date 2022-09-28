const initialState = {
  dataTrending: [],
  detailTrendingId: {},
  trailerTrendingId: {},
  showBar: false,
};

const GetTrending = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRENDING":
      return { ...state, dataTrending: action.data };
    case "GET_DETAIL_TRENDING":
      return { ...state, detailTrendingId: action.data };
    case "GET_TRAILER_TRENDING":
      return { ...state, trailerTrendingId: action.data };
    case "SHOWBAR":
      return { ...state, showBar: action.data };
    default:
      return state;
  }
};

export default GetTrending;
