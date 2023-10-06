import StarterIcon from '../assets/free-item.svg?react' // Import your SVG icons for each plan
import ProIcon from '../assets/pro-item.svg?react'
import PlusIcon from '../assets/plus-item.svg?react'
import EnterpriseIcon from '../assets/enterprise-item.svg?react'
// import ReactIcon from '../assets/react.svg'

const pricingPlans = ({ pricingPlansData }) => {
  return (
    <div className='pricing-options grid grid-cols-4 gap-1 mx-auto max-w-7xl'>
      {pricingPlansData.map((plan) => (
        <div
          key={plan.title}
          className={`w-[312px] h-[468px] p-6 rounded-md border flex-col inline-flex justify-start items-start gap-6  ${
            plan.title === 'Starter'
              ? 'bg-indigo-50 border-violet-200'
              : plan.title === 'Plus'
              ? 'bg-gradient-to-b from-blue-400 to-fuchsia-500 rounded-md border border-indigo-300'
              : plan.title === '* Pro'
              ? 'bg-gradient-to-b from-violet-500 to-fuchsia-500'
              : plan.title === 'ENTERPRISE'
              ? 'bg-neutral-50 border-gray-200'
              : '' // Add more conditions for other styles
          }`}
        >
          <div className='w-[163px] text-indigo-400 text-sm font-bold font-creato-bold uppercase leading-normal tracking-widest'>
            {plan.title}
          </div>
          {/* <div className='text-xl font-semibold'>{plan.title}</div> */}
          {/* <div className='text-2xl font-bold'>{plan.price}</div>
          <div className='text-gray-600'>{plan.frequency}</div> */}
          <div className='w-[264px] h-[108px] py-3 flex-col justify-center items-start inline-flex'>
            <div className='w-[264px] text-blue-700 text-[40px] font-creato-bold leading-[48px] tracking-wide'>
              {plan.price}
            </div>
            {plan.frequency !== undefined && plan.frequency !== '' ? ( // Check if plan has a non-empty frequency
              <div className='w-[264px] text-indigo-50 text-sm font-normal font-creato-normal leading-9 tracking-wide'>
                {plan.frequency}
              </div>
            ) : (
              <div className='w-[264px] text-indigo-50 text-sm font-normal font-creato-normal leading-9 tracking-wide'>
                <span className='invisible'>
                  {plan.title === 'ENTERPRISE' ? '' : '/month'}
                </span>
              </div>
            )}
          </div>
          <div className='w-[264px] h-[204px] py-2 flex-col justify-start items-start inline-flex'>
            {plan.features.map((feature, index) => (
              <div
                key={index}
                className='w-[259.26px] py-1.5 justify-start items-start inline-flex'
              >
                <div className='w-[20.74px] h-[20.74px] relative'>
                  <div className='w-[20.74px] h-[20.74px] left-0 top-0 absolute'>
                    {' '}
                    <div
                      className={`${
                        plan.title === 'ENTERPRISE'
                          ? 'w-[5.19px] h-[5.19px] left-[7.78px] top-[7.78px] absolute'
                          : ''
                      }`}
                    >
                      {plan.title === 'Starter' && <StarterIcon />}{' '}
                      {/* Render the appropriate icon based on plan */}
                      {plan.title === '* Pro' && <ProIcon />}
                      {plan.title === 'Plus' && <PlusIcon />}
                      {plan.title === 'ENTERPRISE' && <EnterpriseIcon />}
                    </div>
                  </div>
                </div>
                <div className='w-[238.52px] text-blue-700 text-sm font-medium font-creato-medium leading-snug tracking-[0.0175rem]'>
                  {feature}
                </div>
              </div>
            ))}
          </div>

          <div className='w-[260px] h-10 px-[15.56px] py-[5.19px] bg-indigo-500 rounded-[8.90px] justify-center items-center gap-[11.13px] inline-flex'>
            <div className='w-[228px] text-center text-zinc-100 text-base font-medium font-creato-medium leading-normal tracking-tight'>
              {plan.cta}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default pricingPlans
