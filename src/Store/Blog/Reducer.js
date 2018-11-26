import initialState from '../initialState';
import * as types from './Types';

export default function blogReducer(state = initialState.blog, action) {
  switch (action.type) {
    case types.BLOG_LOADING:
      return {
        ...state,
        loading: action.isLoading
      };
    case types.LOAD_BLOG_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.posts
      };
    default:
      return state;
  }
}
