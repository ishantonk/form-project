import React from 'react';
import { finishSvg } from '../assets/index';

function FinishForm() {
  return (
    <div className='flex flex-col w-full m-4'>
      <div className='flex flex-col justify-center items-start mb-10'>
        <div className='flex mb-2'>
          <div className="overflow-hidden relative w-12 h-12 p-3 bg-blue-200 rounded-full">
            <img src={finishSvg} alt="payment svg" />
          </div>
        </div>
        <div className='my-4'>
          <h6 className='text-lg font-semibold leading-normal mb-1 text-gray-800'>
            Your Feedback
          </h6>
          <p className='text-base font-medium leading-relaxed text-gray-400'>
            Tell us about your experience or any feedback you want to give us.
          </p>
        </div>
      </div>

      <div>
        <form action="">
          <div className="mb-6">
            <label htmlFor="feedback_message" className="block mb-2 text-sm font-semibold text-gray-500">Feedback</label>
            <textarea rows='4' id="feedback_message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your message..."></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FinishForm;