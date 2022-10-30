import React, { useState } from 'react';
import Modal from '../Modal/Modal';


const SingleGun = (props) => {
    const [modalData, setModalData] = useState({});
    console.log(modalData);
    const { gun, countIncrease } = props;
    const { action, bullet, name , category , img , price } = gun;
    return (
        <div>
           <div className="card w-full h-full bg-base-100 shadow-xl">
            <figure><img className="w-96 h-44" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="font-extrabold font-serif">{ category}</p>
                <p className="shadow rounded w-20 mx-auto bg-slate-200 font-extrabold font-serif">{price}$
                </p>

                    <div className="card-actions">
                        <div className="badge badge-outline">{action}</div> 
                        <div className="badge badge-outline">{bullet}</div>
                        
                    </div>
                    <div className="mt-4">
                        <button onClick={()=> countIncrease()} className="btn btn-sm mr-2">Add to Cart</button>
                        {/* <button className="btn btn-sm btn-success">Deatils</button> */}
                        
                        <label onClick={()=> setModalData(gun)} htmlFor="my-modal-3" className="btn btn-sm btn-success">details</label>
                        
                    </div>  
                    
                    
            </div>
            </div>
            {
                modalData && <Modal data={modalData} setModalData={setModalData} ></Modal>
            }
            
        </div>
       
    );
};

export default SingleGun;