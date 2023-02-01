const GetStarted = () => {
  return (
    <>
      {/* ini card */}
      <div class='flex justify-center'>
        <div class='rounded-tl-lg rounded-br-lg h-[150px] w-[900px] bg-primary'>
          <div class='card-body'>
            <div class='flex justify-between'>
              <h2 className='card-title text-white text-2xl'>
                Lorem ipsum <br />
                dolor sit amet
              </h2>
              <button className='btn glass'>Mulai dari sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
