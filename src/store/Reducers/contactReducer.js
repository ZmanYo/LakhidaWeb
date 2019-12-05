import {
  CONTACT_START,
  CONTACT_SUCCESS,
  CONTACT_FAIL
} from "../Actions/contactActions";

const initialState = {
  contacts: [],
  isSubmitting: false,
  error: null,
  selectedOption: null,
};


const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_START:
      return {
        ...state,
        isSubmitting: true
      };
    case CONTACT_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        contacts: action.payload,
        error: null
      };
    case CONTACT_FAIL:
        return {
            ...state, error: action.payload
        }
    default:
      return state;
  }
};

export default contactReducer