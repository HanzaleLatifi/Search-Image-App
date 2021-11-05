import React from 'react'
function Image({ imageUrl, imageLikes, imageUser, imageTags }) {


    return (
        <div className="shadow-md py-2 px-2 m-2 ">
            <div className="md:w-96 w-72 h-64 mx-auto">
                <img src={imageUrl} className="h-full w-full  " />
            </div>
            <div className="space-y-2">
                <p>UserName : {imageUser}</p>
                <p>likes: {imageLikes}  </p>
                <div className="space-x-1">
                    {imageTags.map((tag, index) => {
                        return <span key={index} className="bg-green-100  py-1 px-2 text-sm rounded-full ">#{tag.title}</span>
                    })}
                </div>
            </div>

        </div>
    )
}

export default Image
