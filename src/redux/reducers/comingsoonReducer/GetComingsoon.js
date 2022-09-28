const initialState = {
  dataComingsoon: [],
  detailComingsoonId: {},
  trailerComingsoonId: {},
};

const GetComingsoon = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMINGSOON":
      return { ...state, dataComingsoon: action.data };
    case "GET_DETAIL_COMINGSOON":
      return { ...state, detailComingsoonId: action.data };
    case "GET_TRAILER_COMINGSOON":
      return { ...state, trailerComingsoonId: action.data };
    default:
      return state;
  }
};

export default GetComingsoon;
