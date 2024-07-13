import Image from 'next/image';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
      <div className="max-w-screen-md mx-auto">
        <div className="mb-3">
          <Image src={logo} alt="RAF" />
        </div>

        <div className="grid justify-center space-x-4"></div>
      </div>
    );
}

export default Footer;