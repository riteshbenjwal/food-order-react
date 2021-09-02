import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'




const Backdrop = (props) => {
    return (
        <>
        <div className={classes.backdrop} onClick={props.onClose}></div>


            
        </>
    )
}

// export default Backdrop;


const ModalOverlay = (props) => {
    return (
        <>
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>


            
        </>
    )
}

// export  ModalOverlay;

const Modal = (props) => {
    return (
        <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('overlays'))}
        {ReactDOM.createPortal( <ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlays'))}
        </>
    )
}

export default Modal

{/* <Backdrop/> */}
{/* <ModalOverlay>{props.children}</ModalOverlay> */}