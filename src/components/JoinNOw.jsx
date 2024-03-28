const JoinNOw = () => {
  return (
    <div>
      <div className="flex h-[900px] rounded-xl items-center justify-center bg-[#23BE0A]/20 p-6 md:p-0">
        <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%]">
          {/* register design side  */}
          <div className="relative hidden h-full items-center justify-center bg-[#8EA7E91A] md:flex md:w-[60%] lg:w-[40%]">
            <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#23BE14] to-[#23BE0A]"></div>
            <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#23BE14] to-[#23BE0A]"></div>
            <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#23BE14] to-[#23BE0A] transition-all"></div>
            <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#23BE14] to-[#23BE0A]"></div>
            <div className="space-y-2 text-center">
              <h2 className="text-3xl playfair  font-medium text-[#23BE0A] ">
                Welcome Back Book Vive
              </h2>
              <p className="animate-pulse text-sm text-[#23BE0A]">
                Please Enter You Information
              </p>
            </div>
          </div>
          {/* input side  */}
          <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
            <h2 className="pb-8 text-center text-3xl font-bold text-[#23BE0A]">
              Enter yor information
            </h2>

            <form className="flex  w-full flex-col items-center justify-center gap-4">
              <input
                className="w-[80%] rounded-lg border border-[#23BE0A] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                type="Name"
                placeholder=" Full name"
                name="text"
              />
              <input
                className="w-[80%] rounded-lg border border-[#23BE0A] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="w-[80%] rounded-lg border border-[#23BE0A] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                type="password"
                placeholder="Password"
                name="password"
              />
              <p className="text-[14px] text-gray-400">
                Do not have an account ?{" "}
                <a className="text-[#23BE0A] ">Create one</a>
              </p>
          
              {/* The button to open modal */}
              <label htmlFor="my_modal_6" className="btn w-[370px] bg-[#23BE0A] text-white">
                Submit
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my_modal_6" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Congratulation !</h3>
                  <p className=" py-4">
                   Now you are a member of  Literary Haven
                  </p>
                  <div className="modal-action">
                    <label htmlFor="my_modal_6" className="btn bg-[#23BE0A] text-white">
                      Thanks
                    </label>
                  </div>
                </div>
              </div>
            </form>
            {/* divider  */}
            <div className="my-8 flex items-center px-8">
              <hr className="flex-1" />
              <div className="mx-4 text-[#23BE0A]">OR</div>
              <hr className="flex-1" />
            </div>
            {/* sign with google */}
            <div className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
              <div className="flex h-full w-[50%] items-center bg-[#23BE0A] pl-4 text-sm text-white">
                Sign With
              </div>
              <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#23BE0A] group-hover:hidden"></span>
              <span className="pr-4 text-4xl font-bold text-[#23BE0A]">G+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNOw;
