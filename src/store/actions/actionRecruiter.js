import axios from "axios";

export const GET_RECRUITER_BY_ID = 'GET_RECRUITER_BY_ID'
export const EDIT_RECRUITER_BY_ID = "EDIT_RECRUITER_BY_ID";

export const getRecruiter = (id) => {

    return (dispatch) => {
            console.log("2. Masuk Action");
        //loading
        dispatch({
            type: 'GET_RECRUITER_BY_ID',
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: `http://localhost:3001/api/v1/recruiter/${id}`,
            timeout: 120000
        })
            .then((response) => {
                console.log("3. Berhasil get Data : ", response.data.data);
                //berhasil get api
                dispatch({
                            type: 'GET_RECRUITER_BY_ID',
                            payload: {
                                loading: false,
                                data: response.data.data[0],
                                errorMessage: false
                            }
                        })               
            })
            .catch((error)=> {
                console.log("3. Gagal Get Data : ", error.message);
                //gagal get API
                dispatch({
                            type: 'GET_RECRUITER_BY_ID',
                            payload: {
                                loading: false,
                                data: false,
                                errorMessage: error.message
                            }
                        })                
            })

    }
}


export const editRecruiter = (id, data) => {
  return (dispatch) => {
    // loading
    dispatch({
    type: EDIT_RECRUITER_BY_ID,
    payload: {
        loading: true,
        data: false,
        errorMessage: false,
        },
    });

    // get data user
    axios
    .patch(`http://localhost:3001/api/v1/recruiter/${id}`, data, {
        headers: {
        "Content-Type": "multipart/form-data",
        },
    })
    .then((res) => {
        // success get
        // console.log(res.data);
        dispatch({
        type: EDIT_RECRUITER_BY_ID,
        payload: {
            loading: false,
            data: res.data.data[0],
            errorMessage: false,
        },
        });
    })
    .catch((error) => {
        console.log(error.response);
        dispatch({
        type: EDIT_RECRUITER_BY_ID,
        payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
        },
        });
    });
  };
};
