import axios from "axios";

export const GET_JOBSEEKER = "GET_JOBSEEKER";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const GET_ALL_EXPERIENCE = "GET_ALL_EXPERIENCE";
export const ADD_PORTFOLIO = "ADD_PORTFOLIO";
export const GET_ALL_PORTFOLIO = "GET_ALL_PORTFOLIO";

export const getJobseeker = (id) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_JOBSEEKER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get data jobseeker
    axios
      .get(`http://localhost:3001/api/v1/jobseeker/${id}`)
      .then((res) => {
        // success get
        // console.log(res.data);
        dispatch({
          type: GET_JOBSEEKER,
          payload: {
            loading: false,
            data: res.data.Data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: GET_JOBSEEKER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.Data,
          },
        });
      });
  };
};

export const editProfile = (id, data) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: EDIT_PROFILE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get data user
    axios
      .patch(`http://localhost:3001/api/v1/jobseeker/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // success get
        // console.log(res.data);
        dispatch({
          type: EDIT_PROFILE,
          payload: {
            loading: false,
            data: res.data.Data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: EDIT_PROFILE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.Data,
          },
        });
      });
  };
};

export const addExperience = (data) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: ADD_EXPERIENCE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get data user
    axios
      .post(`http://localhost:3001/api/v1/jobseeker/experience`, data)
      .then((res) => {
        // success get
        // console.log(res.data);
        dispatch({
          type: ADD_EXPERIENCE,
          payload: {
            loading: false,
            data: res.data.Data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: ADD_EXPERIENCE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.Data,
          },
        });
      });
  };
};

export const getAllExperience = (id) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_ALL_EXPERIENCE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get data user
    axios
      .get(`http://localhost:3001/api/v1/jobseeker/experience/all/${id}`)
      .then((res) => {
        // success get
        // console.log(res.data);
        dispatch({
          type: GET_ALL_EXPERIENCE,
          payload: {
            loading: false,
            data: res.data.Data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: GET_ALL_EXPERIENCE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.Data,
          },
        });
      });
  };
};

export const addPortfolio = (data) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: ADD_PORTFOLIO,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get data user
    axios
      .post(`http://localhost:3001/api/v1/jobseeker/portfolio`, data)
      .then((res) => {
        // success get
        // console.log(res.data);
        dispatch({
          type: ADD_PORTFOLIO,
          payload: {
            loading: false,
            data: res.data.Data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: ADD_PORTFOLIO,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.Data,
          },
        });
      });
  };
};

export const getAllPortfolio = (id) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_ALL_PORTFOLIO,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get data user
    axios
      .get(`http://localhost:3001/api/v1/jobseeker/portfolio/all/${id}`)
      .then((res) => {
        // success get
        // console.log(res.data);
        dispatch({
          type: GET_ALL_PORTFOLIO,
          payload: {
            loading: false,
            data: res.data.Data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: GET_ALL_PORTFOLIO,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response.data.Data,
          },
        });
      });
  };
};
