const GetStarted = () => {
  return (
    <>
      {/* ini card */}
      <div className="container">
        <div className="my-28 ">
          <div class="flex justify-center">
            <div class="rounded-tl-[30px] rounded-br-[30px] h-[170px] md:h-[150px] w-full bg-primary">
              <div class="card-body">
                <div class="flex justify-between items-center flex-col md:flex-row">
                  <h2 className="card-title text-white text-lg mb-2 md:text-2xl">
                    Lorem ipsum <br />
                    dolor sit amet
                  </h2>
                  <button className="btn glass">Mulai dari sekarang</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
