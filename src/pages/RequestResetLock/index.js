const RequestResetLock = () => {
  return (
    <>
      <div className='card w-4/5 h-1/2 bg-base-100 shadow-2xl ml-36 mt-12'>
        <figure>
          <img
            src={require('../../assets/images/peworld-ungu.png')}
            className='m-2 h-full'
            alt='img'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title justify-center'>
            Request to Reset Your Account Password
          </h2>
        </div>
        <figure>
          <img
            src={require('../../assets/images/gembok.png')}
            className='m-2 h-full'
            alt='img'
          />
        </figure>
        <div className='card-body'>
          <p className='card-title justify-center'>
            The following is the button for you to reset the password.
          </p>
          <div className='card-actions justify-center'>
            <button className='bg-secondary text-white text-xl font-bold w-[48vw] h-[8vh] mt-4 rounded-lg'>
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestResetLock;
