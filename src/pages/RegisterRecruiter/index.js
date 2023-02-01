const RegisterRecruiter = () => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='w-1/2 bg-white'>
          <img
            src={require('../../assets/images/auth-background.png')}
            className='m-3 h-full'
            alt='img'
          />
        </div>
        <div className='w-1/2 bg-white m-6'>
          <div class='flex flex-col'>
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
            <label className='label mt-2'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='text'
              placeholder='Masukan alamat email'
              className='input input-bordered w-50'
            />
            <label className='label'>
              <span className='label-text mt-2'>Perusahaan</span>
            </label>
            <input
              type='text'
              placeholder='Masukan nama perusahaan'
              className='input input-bordered w-50'
            />
            <label className='label'>
              <span className='label-text mt-2'>Bidang Perusahaan</span>
            </label>
            <input
              type='text'
              placeholder='Bidang perusahaan Anda'
              className='input input-bordered w-50'
            />
            <label className='label'>
              <span className='label-text mt-2'>No Handphone</span>
            </label>
            <input
              type='text'
              placeholder='Masukan no handphone'
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
            <label className='label'>
              <span className='label-text mt-2'>Konfirmasi Kata Sandi</span>
            </label>
            <input
              type='text'
              placeholder='Masukan konfirmasi kata sandi'
              className='input input-bordered w-50'
            />
            <button className='bg-secondary text-white text-xl font-bold w-[48vw] h-[8vh] mt-12 rounded-lg'>
              Daftar
            </button>
            <label className='label justify-center'>
              <div className='flex flex-row'>
                <p className='text-dark'>Anda sudah punya akun?</p>
                <p className='text-secondary'>Click disini</p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterRecruiter;
