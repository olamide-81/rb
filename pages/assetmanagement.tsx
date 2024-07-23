import { IoIosArrowDown } from 'react-icons/io'
import Logo from '../public/assets/img/logo.png'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import AssetManagementComponent from '@/components/AssetManagementComponent'
const AssetManagememt = () => {
  return (
    <div className="">
      <div className='bg-cover bg-assetmanagementpagebg'>
        <NavBar />
        <AssetManagementComponent />
      </div>
      <Footer />
    </div>
  )
}

export default AssetManagememt
