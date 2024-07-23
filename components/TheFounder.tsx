import Image from 'next/image'
import Founder from '@/assets/founder.svg'
import Peace from '@/assets/peace.svg'
import WEF from '@/assets/wef.svg'
import Africa from '@/assets/africa.svg'
const TheFounder = () => {
  return (
    <div className="pt-[50px] text-[#262626]">
      <div className="font-switzer">
        <h1 className="text-[18px] font-[500] text-center">Meet The Founder</h1>
        <div className="pt-10 grid sm:grid-cols-2 grid-cols-1 gap-5 max-w-[900px]">
          <div>
            <Image
              src={Founder}
              alt="founder"
              width={400}
              height={400}
              className="w-[401px]"
            />
            <div className="pl-5 pt-4">
              <h1 className="text-[18px] font-[500]">Dr Sarah Samuel Amana</h1>
              <h1 className="text-[14px] font-[400] pt-1 text-[#52525B]">
                Founder & CEO
              </h1>
              <div className="flex items-center gap-3 pt-4">
                <Image
                  src={Peace}
                  alt="peace"
                  width={55}
                  height={55}
                  className="w-[55px]"
                />
                <Image
                  src={WEF}
                  alt="peace"
                  width={55}
                  height={55}
                  className="w-[55px]"
                />
                <Image
                  src={Africa}
                  alt="peace"
                  width={55}
                  height={55}
                  className="w-[55px]"
                />
              </div>
            </div>
          </div>
          <div className="text-[#52525B] text-[14px] font-[400]">
            <div className="pb-7 leading-7">
              <p>
                Dr Sarah Samuel Amana is an award winning personal finance
                expert, she stands as an esteemed authority in personal finance,
                gracing prominent stages throughout Nigeria and earning
                recognition in high-impact events. Renowned for her passion to
                empower individuals in making informed financial decisions, she
                has become a beacon for those aspiring to build generational
                wealth through sound money management.{' '}
              </p>
            </div>
            <div className="pb-7 leading-7">
              <p>
                A distinguished member of the Atlanta Black Chamber in Atlanta,
                Institution of Productivity and Business Innovation Management
                and Forbes BLK community, a global network uniting Black
                entrepreneurs, professionals, leaders, and creators, Sarah
                embodies the essence of financial prowess and is affectionately
                referred to as the "Rich Aunty." As the visionary founder of
                Rich Aunty Finance Limited, Sarah leads a financial literacy
                platform reshaping the financial landscape, guiding individuals
                from financial struggles to the accumulation of wealth. Through
                personalized coaching, she empowers them to save, manage, and
                multiply their money, charting a course for sustained
                prosperity.
              </p>
            </div>
            <div className="pb-7 leading-7">
              <p>
                Sarah holds a certificate in personal finance from McGill
                University's Desautels Faculty of Management in Canada. And also
                a certificate in Advancing Gender Equality and Women Empowerment
                in Africa Entrepreneurship and Financial Literacy Training
                Program by United Nations Institution of Training and Research
                and UNDP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheFounder
