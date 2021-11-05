import React from 'react'
import bc from '../assets/bc.png'
function Image({ imageUrl }) {
    return (
        <div className="shadow-md py-2 px-2 m-2 ">
            <div className="w-56 h-64">
                <img src={imageUrl} className="h-full w-full " />
            </div>
            <div className="space-y-2">
                <p>like: 8 </p>
                <p>views : 1200</p>
                <p>downloads:6439</p>
                <div className="space-x-1">
                    <span className="bg-blue-100 py-1 px-2 rounded-full ">#flower</span>
                    <span className="bg-blue-100 py-1 px-2 rounded-full ">#hat</span>
                    <span className="bg-blue-100 py-1 px-2 rounded-full ">#more</span>
                </div>
            </div>



        </div>
    )
}

export default Image
