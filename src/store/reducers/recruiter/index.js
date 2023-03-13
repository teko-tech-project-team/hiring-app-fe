import {
  GET_RECRUITER_BY_ID,
  EDIT_RECRUITER_BY_ID,
  GET_ORDER_RECRUITER,
} from "../../actions/actionRecruiter";

const initialState = {
  getRecruiterResult: false,
  getRecruiterLoading: false,
  getRecruiterError: false,

  editRecruiterResult: false,
  editRecruiterLoading: false,
  editRecruiterError: false,

  getOrderRecruiterResult: false,
  getOrderRecruiterLoading: false,
  getOrderRecruiterError: false,
};

const recruiter = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECRUITER_BY_ID:
      return {
        ...state,
        getRecruiterResult: action.payload.data,
        getRecruiterLoading: action.payload.loading,
        getRecruiterError: action.payload.errorMessage,
      };
    case EDIT_RECRUITER_BY_ID:
      return {
        ...state,
        editRecruiterResult: action.payload.data,
        editRecruiterLoading: action.payload.loading,
        editRecruiterError: action.payload.errorMessage,
      };
    case GET_ORDER_RECRUITER:
      return {
        ...state,
        getOrderRecruiterResult: action.payload.data,
        getOrderRecruiterLoading: action.payload.loading,
        getOrderRecruiterError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default recruiter;
