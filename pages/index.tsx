import AssetManagement from '@/components/AssetManagement'
import EmpoweringKnowledge from '@/components/EmpoweringKnowledge'
import SectionTwo from '@/components/SectionTwo'
import TailoredSavings from '@/components/TailoredSavings'
import ExpertManaged from '@/components/ExpertManaged'
import FinancialFuture from '@/components/FinancialFuture'
import HeroComponents from '@/components/HeroComponents'
import NavBar from '@/components/NavBar'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import RealTimeProgress from '@/components/RealTimeProgress'
import AchieveMore from '@/components/AchieveMore'
import SecureFuture from '@/components/SecureFuture'
import FinancialGoals from '@/components/FinancialGoal'
import { Box, Modal } from '@mui/material'
import { useEffect, useState } from 'react'
import WaitlistModal from '@/components/WaitlistModal'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  const [waitlistmodal, setWaitlistModal] = useState(false)

  const toggleModal = () => {
    setWaitlistModal(!waitlistmodal)
  }

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);

  return (
    <main className="bg-[#F9FAFB] min-h-screen font-[600] flex flex-col items-center font-switzer">
      <div className="home-bg-hero w-full items-center justify-center flex flex-col">
        <NavBar toggleModal={toggleModal} />
        <HeroComponents toggleModal={toggleModal} />
      </div>
      <div data-aos="fade-up">
        <SectionTwo />
      </div>
      <div data-aos="fade-up">
        <RealTimeProgress />
      </div>
      <div data-aos="fade-up">
        <AchieveMore />
      </div>
      <div data-aos="fade-up">
        <SecureFuture />
      </div>
      <div data-aos="fade-up" className='w-full'>
        <AssetManagement />
      </div>
      <div data-aos="fade-up">
        <FinancialFuture toggleModal={toggleModal} />
      </div>
      <div data-aos="fade-up">
        <Testimonials />
      </div>
      <div data-aos="fade-up">
        <FAQ />
      </div>
      <div data-aos="fade-up" className='w-full'>
        <FinancialGoals />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>

      <Modal
        open={waitlistmodal}
        onClose={toggleModal}
        className="flex items-center justify-center"
      >
        <Box
          className="bg-white p-4 rounded-xl"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 420,
            height: 260,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <WaitlistModal />
        </Box>
      </Modal>
    </main>
  )
}
