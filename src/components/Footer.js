const Footer = () => {
  return (
    <>
      {/* ini footer */}
      <footer className='footer footer-start p-6 bg-primary text-primary-content'>
        <div className='ml-60'>
          <img
            src={require('../../assets/images/peworld.png')}
            className=''
            alt='img'
          />
          <p className='font-bold'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            In euismod ipsum et dui rhoncus auctor.
          </p>
        </div>
      </footer>
      <footer className='footer px-6 bg-primary text-neutral-content p-6 leading-8 border-t-2 '>
        <div className='grid-flow-col gap-4 md:place-self-center'>
          <p>2020 Pewworld. All right reserved</p>
        </div>
        <div className='grid-flow-col gap-6 md:place-self-center'>
          <p>Telephone</p>
          <p>Email</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
