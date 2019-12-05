import axios from 'axios'

// CONTACT ACTIONS **************************************
export const CONTACT_START = "CONTACT_START";
export const CONTACT_SUCCESS = "CONTACT_SUCCESS";
export const CONTACT_FAIL = "CONTACT_FAIL";


// CONTACT ACTION CREATORS

export const customerContact = data => dispatch => {


    dispatch({ type: CONTACT_START });
    return axios
      .post("http://127.0.0.1:8000/api/contact/contact/ ", data)
      .then(res => {
        console.log(data, "from contact");
        dispatch({ type: CONTACT_SUCCESS, payload: res.data.payload });
      }).catch(error=>{
        dispatch({type: CONTACT_FAIL, payload: error.message})
      })
  };

