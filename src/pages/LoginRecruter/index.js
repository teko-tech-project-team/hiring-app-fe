import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

// import mainLogin from "../../assets/images/hero1.jpg";

const LoginRecruiter = () => {

  const navigate = useNavigate();
  
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })

  const [validate, setValidate] = useState({error: false, message: ''})
  
  const handleLogin = (e) => {
    e.preventDefault()
    axios({
      url: 'http://localhost:3001/api/v1/auth/recruiter/login',
      method: "POST",
      data: loginForm
    }).then((res)=> {
      console.log(res.data.data);
      localStorage.setItem('@userLogin', JSON.stringify(res.data.data))
      navigate('/home')
    }).catch((err) => {
      setValidate({error: true, message: err.response.data.message})
    })
  }

  useEffect(()=> {
    if(localStorage.getItem('@userLogin')) {
      // navigate('/home')
    }
  }) 



  return (
    <>
      <div className='flex flex-row'>
        <div className='w-1/2 bg-white p-16'>
          <img
            src={require('../../assets/images/auth-background.png')}
            className='m-3 h-full'
            alt='img'
          />
        </div>

        <div className='w-1/2 bg-white'>
          <div class='flex flex-col p-16'>
            <label className='label'/>
              <span className='label-text text-4xl font-bold'>
                Halo, Recruiter
              </span>
            <p className="mb-11">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nobis eum, molestias saepe molestiae sequi!</p>
              {validate.error && (       
                <p>{validate.message}</p>)
              }
            <form onSubmit={handleLogin} action="">
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                  onChange={(e) => setLoginForm({
                      ...loginForm,
                        email: e.target.value
                  })}                 
                type="email" 
                placeholder="Masukkan Alamat Email" 
                className="input input-bordered w-full max-w-xl" />
              </div>
              <div className="form-control w-full max-w-xl">
                <label className="label">
                  <span className="label-text">Kata Sandi</span>
                </label>
                <input 
                  onChange={(e) => setLoginForm({
                        ...loginForm,
                        password: e.target.value
                  })}                 
                type="password" 
                placeholder="Masukkan Kata Sandi" 
                className="input input-bordered w-full max-w-xl" />
              </div>
              <div className="float-right my-7">
                <Link to="/forgot-password">Lupa Kata Sandi?</Link>
              </div>
              <br />
              <div className="gap-x-4">
                <button type="submit" class="btn btn-warning btn-block">
                  Masuk
                </button>
              </div>
            </form>
            <label className='label justify-center '>
              <div className='flex flex-row '>
                <p className='text-dark'>Anda belum punya akun? </p>
                <p className='text-secondary'> Daftar disini</p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRecruiter;
