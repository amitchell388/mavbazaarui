import React, { useEffect } from 'react'
import '../css/newpost.css'



const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) document.body.classList.add('modal-open')
        else document.body.classList.remove('modal-open')
        return () => document.body.classList.remove('modal-open')
    }, [isOpen])
    return(
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-overlay" >

                <div className="modal-content">
                    <button onClick={onClose}>
                        close
                    </button>

                    {children}
                </div>
            </div>
        </div>
    )
}
export default Modal;


