import axios from "axios";

//FGE TODO remove header from each and place it in a variable

//USER ACTIONS

//USER ACTIVATION  ACTIONS **************************************
export const ACTIVATION_START = "ACTIVATION_START";
export const ACTIVATION_SUCCESS = "ACTIVATION_SUCCESS";
export const ACTIVATION_FAIL = "ACTIVATION_FAIL";

//REQUEST PASSWORD RESET USER ACTIONS **************************************
export const PASSWORD_RESET_START = "PASSWORD_RESET_START";
export const PASSWORD_RESET_SUCCESS = "PASSWORD_RESET_SUCCESS";
export const PASSWORD_RESET_FAIL = "PASSWORD_RESET_FAIL";

//Data Fetching
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const USER_UNAUTHORIZED = "FETCH_DATA_FAILURE";

//REGISTER USER ACTIONS **************************************
export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";

//LOGIN USER ACTIONS *****************************************
export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

//GET USER ACTIONS********************************************
export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

//EDIT USER ACTIONS*******************************************
export const EDIT_USER_START = "EDIT_USER_START";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAIL = "EDIT_USER_FAIL";

//DELETE USER ACTIONS*****************************************
export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";


export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get("http://127.0.0.1:8000/api/users/", {
      headers: { Authorization: sessionStorage.getItem("token") }
    })
    .then(res => {
      console.log(res.data, "hi from get data res");
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      }
    });
};



//USER ACTIVATION ACTIONS **************************************


export const activation = creds => async dispatch => {
  dispatch({ type: ACTIVATION_START });
  try {
    const userCred = await axios.post("http://127.0.0.1:8000/api/users/activation/", creds);
       localStorage.setItem("{uid}/{token}", userCred.data.token);
    dispatch({ type: ACTIVATION_SUCCESS, payload: userCred.data.payload });
     console.log(userCred)
  } catch (error) {
    dispatch({ type: ACTIVATION_FAIL, payload: error });
  }
};




//REQUEST PASSWORD RESET USER ACTIONS **************************************


export const passwordreset = creds => async dispatch => {
  dispatch({ type: PASSWORD_RESET_START });
  try {
    const passresetData = await axios.post("http://127.0.0.1:8000/api/users/reset_password/", creds);
    dispatch({ type: PASSWORD_RESET_SUCCESS, payload: passresetData });
  } catch (error) {
    dispatch({ type: PASSWORD_RESET_FAIL, payload: error });
  }
};




//REGISTER USER ACTION CREATOR *******************************

export const registerUser = creds => async dispatch => {
  dispatch({ type: REGISTER_USER_START });
  try {
    const userData = await axios.post("http://127.0.0.1:8000/api/users/", creds);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: userData });
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAIL, payload: error });
  }
};





//LOGIN USER ACTION CREATOR *******************************************

export const login = creds => async dispatch => {
  dispatch({ type: LOGIN_USER_START });
  try {
    const userCred = await axios.post("http://127.0.0.1:8000/api/token/login/", creds);
    localStorage.setItem("{uid}/{token}", userCred.data.token);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: userCred.data.payload });
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAIL, payload: error });
  }
};

//GET USER ACTION CREATOR *********************************************

export const getUser = () => async dispatch => {
  dispatch({ type: GET_USER_START });
  try {
    const fetchedUser = await axios.get("https://placeholder", {
      headers: { Authorization: localStorage.getItem("lakhidatoken") }
    });
    dispatch({ type: GET_USER_SUCCESS, payload: fetchedUser.data.user });
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error.response });
  }
};

//EDIT USER ACTION CREATOR ********************************************

export const editUser = (userid, user) => async dispatch => {
  dispatch({ type: EDIT_USER_START });
  try {
    const editUsers = await axios.put("placeholder", user, {
      headers: { Authorization: localStorage.getItem("lakhidatoken") }
    });
    dispatch({ type: EDIT_USER_SUCCESS, payload: editUsers.data.user });
  } catch (error) {
    dispatch({ type: EDIT_USER_FAIL, editUsers: error.response });
  }
};
//DELETE USER ACTION CREATOR ******************************************

export const deleteUser = userid => async dispatch => {
  dispatch({ type: EDIT_USER_START });
  try {
    const editUsers = await axios.put("https://placeholder/{userid}", {
      headers: { Authorization: localStorage.getItem("lakhidatoken") }
    });
    dispatch({ type: EDIT_USER_SUCCESS, payload: userid });
  } catch (error) {
    dispatch({ type: EDIT_USER_FAIL, editUsers: error.response });
  }
};
