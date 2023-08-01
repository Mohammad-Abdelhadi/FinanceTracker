import React from 'react'
import './CreatePassword.css';
import createBack from '../Images/createBack.svg'
const CreatePassword = () => {
  return (
    <>
        <div className="createPassword__container">
            <div className="back__container">
                <img src={createBack} alt="" />
                <div className="create__password">Back</div>
            </div>
            <div className="createPassword__text__container">
                <div>Create Password</div>
                <div>your new password should be different from previous used passwords.</div>
            </div>
            <div className="inputs__container">
                <input className="new__password" placeholder='Enter new password'/>
                <input className="confirm__new__password" placeholder='Confirm new password'/>
            </div>
            <button className="createPassword__btn__container">Reset password</button>
            </div> 
    </>
  )
}

export default CreatePassword