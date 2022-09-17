import React from 'react';

function StepCounterAndTitle({ counter, title, isActive }) {
    return (
        <div>
            {isActive
            // on active state
                ? <div className='flex gap-x-4'>
                    <div class="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-blue-200 rounded-full">
                        <span class="font-medium text-blue-600">{counter}</span>
                    </div>
                    <div className='flex justify-center items-center'>
                        <span class="font-semibold text-gray-800">{title}</span>
                    </div>
                </div>
                // on inactive state
                : <div className='flex gap-x-4'>
                    <div class="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full">
                        <span class="font-medium text-gray-600">{counter}</span>
                    </div>
                    <div className='flex justify-center items-center'>
                        <span class="font-normal text-gray-600">{title}</span>
                    </div>
                </div>}
        </div>

    )
}

export default StepCounterAndTitle;