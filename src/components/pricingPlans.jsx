const pricingPlans = ({ pricingPlansData }) => {
  return (
    <div className='pricing-options grid grid-cols-4 gap-8 mx-auto max-w-7xl'>
      {pricingPlansData.map((plan) => (
        <div
          key={plan.title}
          className={`w-[312px] h-[468px] p-6 rounded-md border justify-start items-start gap-6 ${
            plan.title === 'Starter'
              ? 'bg-blue-50 border-blue-200'
              : plan.title === 'Plus'
              ? 'bg-green-50 border-green-200'
              : plan.title === '* Pro'
              ? 'bg-yellow-50 border-yellow-200'
              : plan.title === 'ENTERPRISE'
              ? 'bg-red-50 border-red-200'
              : '' // Add more conditions for other styles
          }`}
        >
          <div className='text-xl font-semibold'>{plan.title}</div>
          <div className='text-2xl font-bold'>{plan.price}</div>
          <div className='text-gray-600'>{plan.frequency}</div>
          <ul>
            {plan.features.map((feature, index) => (
              <li key={index} className='text-gray-800'>
                {feature}
              </li>
            ))}
          </ul>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
            {plan.cta}
          </button>
        </div>
      ))}
    </div>
  )
}

export default pricingPlans
