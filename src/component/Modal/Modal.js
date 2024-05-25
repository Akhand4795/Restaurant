import React from 'react';
import "./Modal.css";

const Modal = ({ closeModal, delBckCls }) => {


    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => { closeModal(false); delBckCls(false) }}> X </button>
                </div>
                <div className="title">
                    <h2>Book a Table?</h2>
                    <p>Share Your Deatils to Book a Table In Our Restaurant.</p>
                </div>
                <div className="body">
                    <form>
                        <label> Name </label>
                        <input type="text" placeholder="Enter Your Name" />
                        <label> Phone No. </label>
                        <input type="number" placeholder="Enter Your Phone Number" />
                    </form>
                </div>
                <div className="footer">
                    <button id="cancelBtn" onClick={() => { closeModal(false); delBckCls(false) }}>Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
