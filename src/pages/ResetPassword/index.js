const ResetPassword = () => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='w-1/2 bg-white p-12'>
          <img
            src={require('../../assets/images/auth-background.png')}
            className='m-2 h-full'
            alt='img'
          />
        </div>
        <div className='w-1/2 bg-white m-12 mt-[250px]'>
          <div class='flex flex-col'>
            <label className='label'>
              <span className='label-text text-4xl font-bold'>
                Reset password
              </span>
            </label>
            <label className='label'>
              <span className='label-text text-2xl'>
                Enter your user account's verified email address and we will
                send you a password reset link.
              </span>
            </label>
            <label className='label'>
              <span className='label-text mb-4'>Email</span>
            </label>
            <input
              type='text'
              placeholder='Masukan alamat email'
              className='input input-bordered w-50'
            />

            <label className='label mt-4'></label>
            <button className='bg-secondary text-white text-xl font-bold w-[48vw] h-[8vh] mt-8 rounded-lg'>
              Send password reset email
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
