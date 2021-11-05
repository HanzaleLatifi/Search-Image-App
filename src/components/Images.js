import Image from "./Image"


function Images({ images }) {
    return (
        <div className="flex justify-center flex-wrap items-center">
            {images.length?images.map(i => {
                return <Image key={i.id}
                    imageUrl={i.urls.small}
                    imageLikes={i.likes}
                    imageUser={i.user.username} 
                    imageTags={i.tags} />
            }):<p className="text-xl">not found !</p>}

        </div>
    )
}

export default Images

