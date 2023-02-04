import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Footer';

const Hire = () => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='bg-white w-1/3'>
          <div className='p-12 ml-28'>
            <div className='card card-compact w-96 bg-base-100 shadow-2xl'>
              <figure>
                <img
                  src={require('../../assets/images/louis.png')}
                  className='mt-4 align-item-center'
                  alt='img'
                />
              </figure>
              <div className='card-body p-12'>
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
                  <button className='btn btn-secondary border-none'>
                    Phyton
                  </button>
                  <button className='btn btn-secondary border-none'>
                    Laravel
                  </button>
                  <button className='btn btn-secondary border-none'>
                    Golang
                  </button>
                  <button className='btn btn-secondary border-none'>
                    JavaScript
                  </button>
                  <button className='btn btn-secondary border-none'>PHP</button>
                  <button className='btn btn-secondary border-none'>
                    HTML
                  </button>
                  <button className='btn btn-secondary border-none'>C++</button>
                  <button className='btn btn-secondary border-none'>
                    Kotlin
                  </button>
                  <button className='btn btn-secondary border-none'>
                    Swift
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-2/3 container'>
          <div className='bg-white text-center p-12'>
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
              <label className='label'>
                <span className='label-text mb-2'>Tujuan pesan ini</span>
              </label>
              <div class='w-full px-2 mb-6 md:mb-0'>
                <div class='inline-block relative w-full'>
                  <select
                    class='block appearance-none w-full bg-white-200 border border-white-200 text-gray-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-state'
                  >
                    <option>Projek</option>
                    <option>Kolaborasi</option>
                    <option>Perekrutan</option>
                  </select>
                </div>
              </div>
              <label className='label'>
                <span className='label-text mt-2'>Pesan</span>
              </label>
              <textarea
                className='textarea textarea-bordered m-2 h-[200px]'
                placeholder='Deskripsikan/jelaskan lebih detail'
              ></textarea>
              <input
                type='file'
                className='file-input file-input-ghost w-full max-w-xs'
              />
            </div>
            <button className='btn btn-block btn-secondary border-none mt-2 p-4'>
              Kirim
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hire;
