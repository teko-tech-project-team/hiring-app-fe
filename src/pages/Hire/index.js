import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Hire = () => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='bg-white w-1/3'>
          <div className='m-12'>
            <div className='card card-compact w-96 bg-base-100 shadow-2xl'>
              <figure>
                <img
                  src={require('../../assets/images/louis.png')}
                  className='mt-4 align-item-center'
                  alt='img'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>Louis Tomlinson</h2>
                <p>Web Developer</p>
                <p className='text-gray-400'>Freelancer</p>
                <p className='text-gray-400'>
                  <FontAwesomeIcon icon={faLocationDot} /> Purwokerto, Jawa
                  Tengah
                </p>
                <p className='text-gray-400'>
                  <FontAwesomeIcon icon={faPhone} /> 0812-3456-789
                </p>
                <p className='text-gray-400'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum erat orci, mollis nec gravida sed, ornare quis
                  urna. Curabitur eu lacus fringilla, vestibulum risus at.
                </p>

                <h2 className='card-title'>Skill</h2>
                <div className='card-actions justify-start'>
                  <button className='btn btn-primary'>Phyton</button>
                  <button className='btn btn-primary'>Laravel</button>
                  <button className='btn btn-primary'>Golang</button>
                  <button className='btn btn-primary'>JavaScript</button>
                  <button className='btn btn-primary'>PHP</button>
                  <button className='btn btn-primary'>HTML</button>
                  <button className='btn btn-primary'>C++</button>
                  <button className='btn btn-primary'>Kotlin</button>
                  <button className='btn btn-primary'>Swift</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-2/3 container'>
          <div className='bg-white text-center'>
            <div class='flex flex-col'>
              <label className='label'>
                <span className='label-text text-4xl font-bold'>
                  Hubungi Lous Tomlinson
                </span>
              </label>
              <label className='label'>
                <span className='label-text text-2xl text-start'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </span>
              </label>
              <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                <label
                  class='block text-start tracking-wide text-gray-700 text-xs font-bold mb-2'
                  for='grid-state'
                >
                  Tujuan tentang pesan ini
                </label>
                <div class='inline-block relative w-full'>
                  <select
                    class='block appearance-none w-full bg-white-200 border border-white-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-state'
                  >
                    <option>Projek</option>
                    <option>Kolaborasi</option>
                    <option>Perekrutan</option>
                  </select>
                  <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500'>
                    <svg
                      class='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </div>
              </div>
              <label className='label'>
                <span className='label-text'>Pesan</span>
              </label>
              <input
                type='text'
                placeholder='Deskripsikan/jelaskan lebih detail '
                className='input input-bordered w-50 h-32 text-start m-2'
              />
              <input
                type='file'
                className='file-input file-input-ghost w-full max-w-xs'
              />
            </div>
            <button className='btn btn-block btn-primary mt-2 p-4'>
              Kirim
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hire;
