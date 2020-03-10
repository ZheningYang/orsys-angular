export enum ActionTypes {
  APPLICATION = 'APP',
  NAVIGATION = 'APP.NAVIGATION',
  NAVIGATION_HOME = 'APP.NAVIGATION.HOME',
  NAVIGATION_SEARCH = 'APP.NAVIGATION.SEARCH',
  NAVIGATION_COMMENTS = 'APP.NAVIGATION.COMMENTS',

  SEARCH = 'APP.SEARCH',
  SEARCH_REQUEST = 'APP.SEARCH.REQUEST',
  SEARCH_REQUEST_USER = 'APP.SEARCH.REQUEST.USER',
  SEARCH_RESULT = 'APP.SEARCH.RESULT',

  AUTH = 'APP.AUTH',
  AUTH_SUCCESS = 'APP.AUTH.SUCCESS',
  AUTH_FAIL = 'APP.AUTH.FAIL',

  COMMENTS = 'APP.COMMENTS',
  COMMENTS_LOAD = 'APP.COMMENTS.LOAD',

  // --------------------------------
  ERROR = 'APP.ERROR',


  REQUEST = 'APP.REQUEST',
  REQUEST_START = 'APP.REQUEST_START',
  REQUEST_END = 'APP.REQUEST_END',
  REQUEST_PROGRESS = 'APP.REQUEST_PROGRESS',
  REQUEST_ERROR = 'APP.REQUEST_ERROR',
}
