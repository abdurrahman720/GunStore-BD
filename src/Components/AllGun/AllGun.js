import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({countIncrease}) => {

    const [guns, setGuns] = useState([]);
console.log(guns);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
        
        
    },[])


    return (
        <div>
            <h1 className="text-4xl text-center font-bold mt-4 ">Wellcome to Gun Store</h1>
            <div className="shadow text-center">
            <p className="text-2xl font-bold mt-5 ">Got your Gun license? Cool! </p> <p>You can have a look on our Exclusive Gun Collection!</p>
            </div>

            <div className="w-[90%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-4">
            {
                guns.map(gun => (
                    <SingleGun gun={gun} countIncrease={countIncrease}></SingleGun>
                )
                    
                 )
            }
           </div>

           
        </div>
    );
};

export default AllGun;