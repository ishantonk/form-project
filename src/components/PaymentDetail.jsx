import React from 'react';
import { paymentSvg } from '../assets/index';

function PaymentDetail() {
  return (
    <div className='flex flex-col w-full m-4'>
      <div className='flex flex-col justify-center items-start mb-10'>
        <div className='flex mb-2'>
          <div className="overflow-hidden relative w-12 h-12 p-3 bg-blue-200 rounded-full">
            <img src={paymentSvg} alt="payment svg" />
          </div>
        </div>
        <div className='my-4'>
          <h6 className='text-lg font-semibold leading-normal mb-1 text-gray-800'>
            Your payment details
          </h6>
          <p className='text-base font-medium leading-relaxed text-gray-400'>
            Enter your card details for payment.
          </p>
        </div>
      </div>

      <div>
        <form action="">
          <div className="mb-6">
            <label htmlFor="card_holder_name" className="block mb-2 text-sm font-semibold text-gray-500">Name</label>
            <input type="text" id="card_holder_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name on card" required />
          </div>
          <div className="mb-6">
            <label htmlFor="card_number" className="block mb-2 text-sm font-semibold text-gray-500">Card number</label>
            <input type="text" id="card_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Card number" required />
          </div>
          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className="mb-6">
              <label htmlFor="expiry_date" className="block mb-2 text-sm font-semibold text-gray-500">Expiry date</label>
              <input type="text" id="expiry_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Card expiry date" required />
            </div>
            <div className="mb-6">
              <label htmlFor="cvv_number" className="block mb-2 text-sm font-semibold text-gray-500">CVV</label>
              <input type="text" id="cvv_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="CVV number" required />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PaymentDetail;