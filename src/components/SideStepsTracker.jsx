import React from 'react';
import StepCounterAndTitle from './StepCounterAndTitle';

function SideStepsTracker({ pageIndex }) {
  const titleList = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const subTitleList = [
    "Enter your personal information to confirm your order.",
    "Enter your shipping address where you want to items delivered.",
    "Enter your card details for payment.",
    "Tell us about your experience or any feedback you want to give us.",
  ]
  return (
    <div className='flex bg-slate-50 h-screen'>
      <div className='flex flex-col mx-12 my-auto'>
        {/* title and subtitle */}
        <div className='flex flex-col my-4'>
          <h6 className='text-xl font-semibold leading-normal mb-2 text-gray-800'>
            {titleList[pageIndex]}
          </h6>
          <p className='text-base font-medium leading-relaxed text-gray-400'>
            {subTitleList[pageIndex]}
          </p>
        </div>
        {/* step counter */}
        <div className='flex lg:flex-col gap-y-14 my-4'>
          <StepCounterAndTitle counter={1} title="Personal information" isActive={pageIndex == 0 ? true : false} />
          <StepCounterAndTitle counter={2} title="Address" isActive={pageIndex == 1 ? true : false} />
          <StepCounterAndTitle counter={3} title="Payment" isActive={pageIndex == 2 ? true : false} />
          <StepCounterAndTitle counter={4} title="Finish" isActive={pageIndex == 3 ? true : false} />
        </div>
      </div>
    </div>
  )
}

export default SideStepsTracker;