import axios from "axios";

export const EDIT_PROFILE = "EDIT_PROFILE";

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
      .patch(`http://localhost:3001/api/v1/jobseeker/${id}`, data)
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
