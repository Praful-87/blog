import * as types from "./actionTypes";
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};
export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
      };
    case types.REGISTER_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    case types.LOGIN_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    default:
      return oldState;
  }
};