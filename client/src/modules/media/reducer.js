import {
  FETCH_MEDIA_DETAILS_FAILED,
  FETCH_MEDIA_DETAILS_REQUESTED,
  FETCH_MEDIA_DETAILS_SUCCESS, SEARCH_MEDIA_FAILED, SEARCH_MEDIA_REQUESTED, SEARCH_MEDIA_SUCCESS,
} from './constants';

const initialState = {
  allMedia: [],
  detailedMedia: {
    id: -1,
    name: '',
    description: '',
    actors: [],
  },
  loading: false,
  error: null,
  hasSearched: false,
};

export default function mediaReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MEDIA_DETAILS_REQUESTED:
      return {
        ...state,
        // Initial media object, with the requesting id
        detailedMedia: Object.assign(initialState.detailedMedia, { id: action.media.id }),
        loading: true,
        hasSearched: true,
      };
    case FETCH_MEDIA_DETAILS_SUCCESS:
      return {
        ...state,
        detailedMedia: action.media,
        loading: false,
      };
    case FETCH_MEDIA_DETAILS_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case SEARCH_MEDIA_SUCCESS:
      return {
        ...state,
        allMedia: action.media.results,
        loading: false,
      };
    case SEARCH_MEDIA_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case SEARCH_MEDIA_REQUESTED:
      return {
        ...state,
        hasSearched: true,
        loading: true,
      };
    default:
      return state;
  }
}
