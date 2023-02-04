import { EDIT_PROFILE } from "../../actions/actionJobseeker";

const initialState = {
  editResult: false,
  editLoading: false,
  editError: false,

  profile_image: false,
  skills: false,
};

const jobseeker = (state = initialState, action) => {
  switch (action.type) {
    case "IMAGE":
      return {
        ...state,
        profile_image: action.profile_image,
      };
    case "SKILL":
      return {
        ...state,
        skills: action.skills,
      };
    case EDIT_PROFILE:
      return {
        ...state,
        editResult: action.payload.data,
        editLoading: action.payload.loading,
        editError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default jobseeker;
