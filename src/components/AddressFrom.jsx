import React from 'react';
import { addressSvg } from '../assets/index';

function AddressFrom() {
    return (
        <div className='flex flex-col w-full m-4'>
            <div className='flex flex-col justify-center items-start mb-10'>
                <div className='flex mb-2'>
                    <div className="overflow-hidden relative w-12 h-12 p-1 bg-blue-200 rounded-full">
                        <img src={addressSvg} alt="address svg" />
                    </div>
                </div>
                <div className='my-4'>
                    <h6 className='text-lg font-semibold leading-normal mb-1 text-gray-800'>
                        Your shipping address
                    </h6>
                    <p className='text-base font-medium leading-relaxed text-gray-400'>
                        Enter your shipping address where you want to items delivered.
                    </p>
                </div>
            </div>

            <div>
                <form action="">
                    <div className="mb-6">
                        <label htmlFor="street_address" className="block mb-2 text-sm font-semibold text-gray-500">Address</label>
                        <input type="text" id="street_address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Street address" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="apt_address" className="block mb-2 text-sm font-semibold text-gray-500">Address 2</label>
                        <input type="text" id="apt_address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="House no., Apt, Building (Optional)" />
                    </div>
                    <div className='grid md:grid-cols-3 md:gap-6'>
                        <div className="mb-6">
                            <label htmlFor="state" className="block mb-2 text-sm font-semibold text-gray-500">State</label>
                            <input type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="State" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="city" className="block mb-2 text-sm font-semibold text-gray-500">City</label>
                            <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Town/City" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="zip_code" className="block mb-2 text-sm font-semibold text-gray-500">Zip</label>
                            <input type="text" id="zip_code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Zip code" required />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddressFrom;