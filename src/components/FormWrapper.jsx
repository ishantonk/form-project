import React from 'react';
import AddressFrom from './AddressFrom';
import Button from './Button';
import PaymentDetail from './PaymentDetail';
import PersonalDetailForm from './PersonalDetailForm';
import FinishForm from './FinishForm';

const FormWrapper = ({ pageIndex, backFun, nextFun }) => {
  const formPages = [<PersonalDetailForm />, <AddressFrom />, <PaymentDetail />, <FinishForm />]
  return (
    <div className='flex flex-col mx-auto max-w-2xl bg-white h-screen'>
      <div className='flex flex-col my-auto'>
        {formPages[pageIndex]}
        <div className='flex justify-end'>
          <Button title="Back" type="Secondary" btnFunction={backFun} />
          <Button title={pageIndex == formPages.length - 1 ? "Finish" : "Next step"} type="primary" btnFunction={nextFun} />
        </div>
      </div>
    </div>
  )
}

export default FormWrapper;