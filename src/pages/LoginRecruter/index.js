const LoginRecruiter = () => {
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
            <label className='label'>
              <span className='label-text text-4xl font-bold'>
                Halo, Pewpeople
              </span>
            </label>
            <label className='label'>
              <span className='label-text text-2xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </span>
            </label>
            <label className='label mt-2'>
              <span className='label-text'>Nama</span>
            </label>
            <input
              type='text'
              placeholder='Masukan nama panjang'
              className='input input-bordered w-50'
            />
            <label className='label'>
              <span className='label-text mt-2'>Kata Sandi</span>
            </label>
            <input
              type='text'
              placeholder='Masukan kata sandi'
              className='input input-bordered w-50'
            />
            <p className='text-end mt-6 font-medium'>Lupa kata sandi?</p>
            <button className='bg-secondary text-white text-xl font-bold w-full h-[8vh] mt-12 rounded-lg '>
              Masuk
            </button>
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
