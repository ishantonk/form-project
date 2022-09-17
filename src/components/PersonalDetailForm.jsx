import React from 'react';
import { personSvg } from '../assets/index';

function PersonalDetailForm() {
    return (
        <div className='flex flex-col w-full m-4'>
            <div className='flex flex-col justify-center items-start mb-10'>
                <div className='flex mb-2'>
                    <div className="overflow-hidden relative w-12 h-12 p-3 bg-blue-200 rounded-full">
                        <img src={personSvg} alt="address svg" />
                    </div>
                </div>
                <div className='my-4'>
                    <h6 className='text-lg font-semibold leading-normal mb-1 text-gray-800'>
                        Your personal information
                    </h6>
                    <p className='text-base font-medium leading-relaxed text-gray-400'>
                        Enter your personal information to confirm your order.
                    </p>
                </div>
            </div>

            <div>
                <form action="">
                    <div className='grid md:grid-cols-2 md:gap-6'>
                        <div className="mb-6">
                            <label htmlFor="first_name" className="block mb-2 text-sm font-semibold text-gray-500">First name</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="First name" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="last_name" className="block mb-2 text-sm font-semibold text-gray-500">Last name</label>
                            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Last name" required />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 md:gap-6'>
                        <div className="mb-6">
                            <label htmlFor="phone_number" className="block mb-2 text-sm font-semibold text-gray-500">Phone number</label>
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="phone_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Phone number" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-500">E-mail address</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="countries" className="block mb-2 text-sm font-semibold text-gray-500">Select your country</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PersonalDetailForm;