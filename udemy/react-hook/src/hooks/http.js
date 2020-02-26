import { useReducer, useCallback } from "react";

const initialState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifer: null
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifer: action.identifer
      };
    case "RESPONSE":
      return {
        ...currentState,
        loading: false,
        data: action.responseData,
        extra: action.extra
      };
    case "ERROR":
      return {
        loading: false,
        error: action.errorMessage
      };
    case "CLEAR":
      return initialState;
    default:
      throw new Error("Should not be reached!");
  }
};

const useHttp = () => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const clear = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, [])

  const sendRequest = useCallback((url, method, body, reqExtra, reqIdentifer) => {
    dispatch({
      type: "SEND",
      identifer: reqIdentifer
    });

    fetch(url,
      {
        method: method,
        body: body,
        header: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        dispatch({
          type: "RESPONSE",
          responseData: responseData,
          extra: reqExtra
        });
      })
      .catch(error => {
        dispatch({
          type: "ERROR",
          errorMessage: "Something went wrong!"
        });
      })
  }, []);

  return {
    isLoading: state.loading,
    data: state.data,
    error: state.error,
    reqExtra: state.extra,
    reqIdentifer: state.identifer,
    sendRequest: sendRequest,
    clear: clear
  };
};

export default useHttp;