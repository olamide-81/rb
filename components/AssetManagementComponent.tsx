import React, { useEffect, useRef, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { SpinnerCircular } from 'spinners-react'

const features = [
    {
      title: 'Your Financial Blueprint',
      content: 'Discover your personalized financial plan with RAF, tailored to meet your unique goals and needs.',
    },
    {
      title: 'Smart Diversification',
      content: 'Explore diverse investment options with RAF to balance risk and reward in your portfolio.',
    },
    {
      title: 'Adaptive Portfolio Management',
      content: 'Stay ahead of market trends with RAF’s adaptive portfolio strategies, ensuring optimal performance at all times.',
    },
    {
      title: 'Personal Finance Expert',
      content: 'Receive expert advice from RAF’s seasoned financial consultants to navigate your financial journey confidently.',
    },
    {
      title: 'Performance Insights',
      content: 'Get detailed insights into your portfolio’s performance and make informed decisions with RAF’s advanced analytics.',
    },
  ];
  

  const FeatureItem = ({ feature, index, expanded, onToggle }) => {
    const contentRef = useRef(null);
  
    useEffect(() => {
      if (expanded) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.maxHeight = '0px';
      }
    }, [expanded]);
  
    return (
      <div
        className="bg-[#1A1A1A] bg-opacity-40 py-4 px-4 rounded-xl flex flex-col items-start justify-between cursor-pointer mb-2"
        onClick={() => onToggle(index)}
      >
        <div className="flex items-center justify-between w-full">
          <h1 className="font-switzer font-[400] text-[16px] text-white">
            {feature.title}
          </h1>
          <BiChevronDown color="#fff" size={24} />
        </div>
        <div
          ref={contentRef}
          className={`expandable-content ${expanded ? 'expanded' : ''}`}
        >
          <p className="mt-2 text-[#d6d6d6] text-[13px]">{feature.content}</p>
        </div>
      </div>
    );
  };
export default function AssetManagementComponent() {

  const [email, setemail] = useState('')
  const [isloading, setisloading] = useState(false)

  const handlewaitlist = async () => {
    setisloading(true)
    setTimeout(() => {
      setisloading(false)
    }, 6000)
  }

  const [expandedIndex, setExpandedIndex] = useState(null)

  const handleToggle = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="w-full mx-auto max-w-screen-xl py-40">
      <div className="md:flex items-start justify-between md:space-y-0 space-y-14">
        <div className="md:w-[60%] px-10">
          <h1 className="text-[14px] font-switzer font-[400] text-[#D5E3A1]">
            Asset management - Coming soon
          </h1>
          <h1 className="text-[46px] font-switzer font-[500] text-white mt-3">
            Your Financial Future,
          </h1>
          <h1 className="text-[46px] font-switzer font-[500] text-white -mt-4">
            Reimagined
          </h1>

          <h1 className="text-[14px] font-switzer font-[400] text-[#fff] mt-10">
            Be the First to Know – Join Our Exclusive Waitlist
          </h1>

          <div className="flex items-center space-x-4 mt-6">
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter email"
              type="email"
              className="border border-[#52525B] rounded-lg py-3 px-3 bg-transparent font-switzer text-[14px] w-[300px] text-white outline-none"
            />
            <div
              onClick={handlewaitlist}
              className="text-[14px] w-[200px] text-black rounded-lg bg-white items-center font-[500] cursor-pointer justify-center flex py-3"
            >
              {isloading ? (
                <SpinnerCircular color="#ffffff" size={20} />
              ) : (
                ' Join waitlist'
              )}
            </div>
          </div>
        </div>
        <div className="md:w-[40%] px-10">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              feature={feature}
              index={index}
              expanded={expandedIndex === index}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
