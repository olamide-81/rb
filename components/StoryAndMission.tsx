const StoryAndMission = () => {
  return (
    <div className="flex justify-center pt-[50px]">
      <div className="font-switzer max-w-[900px]">
        <div>
          <div className="flex sm:flex-row flex-col justify-between">
            <h1 className="text-[18px] font-[500] w-[20%]">Our Story</h1>
            <div className="w-[80%]">
              <div className="text-[14px] text-[#52525B] font-[400] leading-7 pb-6">
                Rich Aunty Finance was born from a simple yet powerful idea:
                everyone deserves access to smart, goal-oriented savings
                solutions that actually work. Founded in [year] by a team of
                finance experts and tech innovators, we set out to revolutionize
                the way people save and achieve their financial dreams.
              </div>
              <div className="text-[14px] text-[#52525B] font-[400] leading-7">
                We noticed that traditional savings methods often left people
                feeling stuck, unmotivated, and without real growth. That's when
                we decided to create RAF Plans – a suite of tailored saving
                templates designed to make reaching your financial goals not
                just possible, but enjoyable and rewarding.
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col justify-between pt-10">
            <h1 className="text-[18px] font-[500] w-[20%]">Our Mission</h1>
            <div className="w-[80%]">
              <div className="text-[14px] text-[#52525B] font-[400] leading-7">
                At Rich Aunty Finance, our mission is to empower individuals to
                take control of their financial future. We believe that with the
                right tools, guidance, and motivation, anyone can transform
                their financial life and achieve their dreams.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryAndMission;
