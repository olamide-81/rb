import { IoIosArrowDown } from 'react-icons/io'
import Logo from '../public/assets/img/logo.png'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import AssetManagementComponent from '@/components/AssetManagementComponent'
import Head from 'next/head'
const AssetManagememt = () => {
  return (
    <div className="px-10">
      <Head>
        <title>Join Our Exclusive Waitlist | RAF</title>
        <meta
          name="description"
          content="Be the First to Know – Join Our Exclusive Waitlist"
        />
      </Head>
      <div className="bg-cover bg-assetmanagementpagebg">
        <NavBar
          style={{
            color: '#262626',
          }}
        />
        <AssetManagementComponent />
      </div>
      <Footer />
    </div>
  )
}

export default AssetManagememt
