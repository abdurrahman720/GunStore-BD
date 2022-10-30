import React from 'react';

const Modal = ({data, setModalData}) => {
    const { name, capacity, price, action, bullet } = data;
    return (
        <div>
           
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label onClick={()=>setModalData(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="py-4">{capacity}</p>
                    <p className="py-4">{action}</p>
  </div>
</div>
        </div>
    );
};

export default Modal;