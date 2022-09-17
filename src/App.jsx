import React, { useState } from 'react';
import FormWrapper from './components/FormWrapper';
import SideStepsTracker from './components/SideStepsTracker';

function App() {
  const [currentPageIdx, setCurrentPageIdx] = useState(0)

  const backBtnFunc = () => {
    if (currentPageIdx > 0) {
      setCurrentPageIdx(currentPageIdx - 1);
    }
  }

  const nextBtnFunc = () => {
    // 4 is the length of page list
    if (currentPageIdx < 3) {
      setCurrentPageIdx(currentPageIdx + 1);
    }
  }
  return (
    <div className='grid grid-flow-col grid-cols-10'>
      <div className='col-span-4'>
        <SideStepsTracker pageIndex={currentPageIdx} />
      </div>
      <div className='col-span-6'>
        <FormWrapper pageIndex={currentPageIdx} backFun={backBtnFunc} nextFun={nextBtnFunc} />
      </div>
    </div>
  )
}

export default App;