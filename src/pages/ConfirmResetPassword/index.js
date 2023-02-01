const ConfirmResetPassword = () => {
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
                Reset password
              </span>
            </label>
            <label className='label'>
              <span className='label-text text-2xl'>
                You need to change your password to activate your account
              </span>
            </label>

            <label className='label'>
              <span className='label-text'>Kata sandi</span>
            </label>
            <input
              type='text'
              placeholder='Masukan kata sandi'
              className='input input-bordered w-50'
            />
            <label className='label'>
              <span className='label-text'>Confirm new password</span>
            </label>
            <input
              type='text'
              placeholder='Masukan konfirmasi kata sandi'
              className='input input-bordered w-50'
            />
            <label className='label mt-4'></label>
            <button className='bg-secondary text-white text-xl font-bold w-[48vw] h-[8vh] mt-6 rounded-lg'>
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmResetPassword;
