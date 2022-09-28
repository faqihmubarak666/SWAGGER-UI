import { combineReducers } from "redux";
import GetTrendingReducer from "./trendingReducer/index";
import GetComingsoonReducer from "./comingsoonReducer/index";

const rootReducer = combineReducers({
  rGetDataTrending: GetTrendingReducer,
  rGetDataComingsoon: GetComingsoonReducer,
});

export default rootReducer;
