import NavBar from '@/components/NavBar'
import phone from '@/assets/phone.png'
import Image from 'next/image'
import savings1 from '@/assets/savings1.svg'
import savings2 from '@/assets/savings2.svg'
import savings3 from '@/assets/savings3.svg'
import Footer from '@/components/Footer'
import Head from 'next/head'

const Savings = () => {
  return (
    <div className="h-screen max-w-screen-xl mx-auto px-10 w-full">
      <Head>
        <title>Our Plans | RAF</title>
        <meta
          name="description"
          content="Choose from a variety of goal-specific savings plans, add money,
              and earn returns as you save. Whether it’s for education,
              vacations, or special occasions, our plans are designed to help
              you reach your dreams faster."
        />
      </Head>
      <NavBar
        style={{
          color: '#262626',
        }}
      />
      <div className="sm:pl-8 pl-0 flex mt-20 justify-between">
        <div>
          <div className="mb-5">
            <span className="font-switzer text-[15px] font-[500] text-[#3C76E1] ">
              RAF Plans
            </span>
            <h2 className="font-[500] mb-4 text-[33px] leading-[45px] font-switzer text-[#262626]">
              Achieve Your Goals with <br /> Tailored Savings Plans
            </h2>
            <p className="text-[#595959] leading-[25px] font-[400] text-[15px] md:w-[60%]">
              Choose from a variety of goal-specific savings plans, add money,
              and earn returns as you save. Whether it’s for education,
              vacations, or special occasions, our plans are designed to help
              you reach your dreams faster.
            </p>
          </div>

          <div className="mt-8 md:flex items-center md:space-x-6 space-x-0 md:space-y-0 space-y-6">
            <Image src={savings1} width={400} alt={'savings 1'} />
            <Image src={savings2} width={400} alt={'savings 4'} />
            <Image src={savings3} width={400} alt={'savings 2'} />
          </div>
        </div>

        <div className="hidden">
          <Image src={phone} alt="savings" width={250} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Savings
