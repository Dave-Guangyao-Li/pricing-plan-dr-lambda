import PricingPlans from './components/pricingPlans'
import { pricingPlansMonthlyData } from './data/pricingPlansData'
import { pricingPlansYearlyData } from './data/pricingPlansData'
import { useState } from 'react'

function App() {
  const [isYearlyData, setIsYearlyData] = useState(false)
  const [pricingPlansData, setPricingPlansData] = useState(
    pricingPlansMonthlyData
  )

  const handleMonthlyClick = () => {
    setIsYearlyData(false)
    setPricingPlansData(pricingPlansMonthlyData)
  }

  const handleYearlyClick = () => {
    setIsYearlyData(true)
    setPricingPlansData(pricingPlansYearlyData)
  }

  return (
    <div className='card w-[100rem] h-[71.625rem] bg-Grey-50 mx-auto'>
      <div className='card-upper mx-auto pt-[17.75rem] max-w-7xl flex justify-between align-middle pb-[2.5rem]'>
        <div className='title-box '>
          <h1 className='card-title text-neutral-100 font-creato-normal text-[3rem] leading-10 tracking-[.06em]'>
            <span>Pricing</span>
          </h1>
        </div>

        <div className='billing-options flex justify-center items-center rounded-xl bg-Grey-100'>
          <div
            className='billing-option text-[1rem] px-2 py-2'
            onClick={handleMonthlyClick}
          >
            <span
              className={`rounded-md ${
                isYearlyData ? '' : 'bg-Grey-50'
              } px-[1rem] py-[0.1rem] font-medium`}
            >
              Monthly billing
            </span>
          </div>
          <div
            className='billing-option text-[1rem] px-2 py-2'
            onClick={handleYearlyClick}
          >
            <span
              className={`rounded-md px-[1rem] py-[0.1rem] text-Grey-600 ${
                isYearlyData ? 'bg-Grey-50' : ''
              } font-normal `}
            >
              Yearly Billing (save 17%)
            </span>
          </div>
        </div>
      </div>
      <PricingPlans pricingPlansData={pricingPlansData} />
    </div>
  )
}

export default App
