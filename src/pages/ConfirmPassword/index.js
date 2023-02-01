const ConfirmPassword = () => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='w-1/2 bg-white'>
          <img
            src={require('../../assets/images/auth-background.png')}
            className='m-2 h-full'
            alt='img'
          />
        </div>
        <div className='w-1/2 bg-white m-4'>
          <div class='flex flex-col'>
            <label className='label'>
              <span className='label-text text-4xl font-bold'>
                Please login with your account
              </span>
            </label>
            <label className='label'>
              <span className='label-text text-2xl'>
                We have an an email containing a password reset instruction
                toyour email. please check your email.
              </span>
            </label>

            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='text'
              placeholder='Masukan email'
              className='input input-bordered w-50'
            />
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='text'
              placeholder='Masukan password'
              className='input input-bordered w-50'
            />
            <label className='label mt-4'></label>
            <button className='bg-secondary text-white text-xl font-bold w-[48vw] h-[8vh] mt-8 rounded-lg'>
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmPassword;
