import {
  EDIT_PROFILE,
  ADD_EXPERIENCE,
  GET_ALL_EXPERIENCE,
  GET_JOBSEEKER,
  ADD_PORTFOLIO,
  GET_ALL_PORTFOLIO,
  GET_ALL_JOBSEEKER,
  GET_ORDER,
  EDIT_STATUS,
} from "../../actions/actionJobseeker";

const initialState = {
  allJobseekerResult: false,
  allJobseekerLoading: false,
  allJobseekerError: false,

  getJobseekerResult: false,
  getJobseekerLoading: false,
  getJobseekerError: false,

  editResult: false,
  editLoading: false,
  editError: false,

  addExperienceResult: false,
  addExperienceLoading: false,
  addExperienceError: false,

  allExperienceResult: false,
  allExperienceLoading: false,
  allExperienceError: false,

  addPortfolioResult: false,
  addPortfolioLoading: false,
  addPortfolioError: false,

  allPortfolioResult: false,
  allPortfolioLoading: false,
  allPortfolioError: false,

  profile_image: false,
  skills: [],
  role: "job-seeker",

  getOrderResult: false,
  getOrderLoading: false,
  getOrderError: false,

  editStatusResult: false,
  editStatusLoading: false,
  editStatusError: false,
};

const jobseeker = (state = initialState, action) => {
  switch (action.type) {
    case "ROLE":
      return {
        ...state,
        role: action.role,
      };
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
    case GET_ALL_JOBSEEKER:
      return {
        ...state,
        allJobseekerResult: action.payload.data,
        allJobseekerLoading: action.payload.loading,
        allJobseekerError: action.payload.errorMessage,
      };
    case GET_JOBSEEKER:
      return {
        ...state,
        getJobseekerResult: action.payload.data,
        getJobseekerLoading: action.payload.loading,
        getJobseekerError: action.payload.errorMessage,
      };
    case EDIT_PROFILE:
      return {
        ...state,
        editResult: action.payload.data,
        editLoading: action.payload.loading,
        editError: action.payload.errorMessage,
      };
    case ADD_EXPERIENCE:
      return {
        ...state,
        addExperienceResult: action.payload.data,
        addExperienceLoading: action.payload.loading,
        addExperienceError: action.payload.errorMessage,
      };
    case GET_ALL_EXPERIENCE:
      return {
        ...state,
        allExperienceResult: action.payload.data,
        allExperienceLoading: action.payload.loading,
        allExperienceError: action.payload.errorMessage,
      };
    case ADD_PORTFOLIO:
      return {
        ...state,
        addPortfolioResult: action.payload.data,
        addPortfolioLoading: action.payload.loading,
        addPortfolioError: action.payload.errorMessage,
      };
    case GET_ALL_PORTFOLIO:
      return {
        ...state,
        allPortfolioResult: action.payload.data,
        allPortfolioLoading: action.payload.loading,
        allPortfolioError: action.payload.errorMessage,
      };
    case GET_ORDER:
      return {
        ...state,
        getOrderResult: action.payload.data,
        getOrderLoading: action.payload.loading,
        getOrderError: action.payload.errorMessage,
      };
    case EDIT_STATUS:
      return {
        ...state,
        editStatusResult: action.payload.data,
        editStatusLoading: action.payload.loading,
        editStatusError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default jobseeker;
