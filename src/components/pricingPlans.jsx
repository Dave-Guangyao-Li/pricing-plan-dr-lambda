import { pricingPlansData } from '../data/pricingPlansData'

const pricingPlans = () => {
  return (
    <div className='pricing-options grid grid-cols-4 gap-8 mx-auto max-w-7xl'>
      {pricingPlansData.map((plan) => (
        <div key={plan.title} className='border border-slate-300 shadow-lg p-8'>
          {plan.title}
        </div>
      ))}
    </div>
  )
}

export default pricingPlans
