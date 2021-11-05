import Image from "./Image"


function Images({ images }) {
    return (
        <div className="flex justify-center flex-wrap items-center">
            {images.map(i => {
                return <Image key={i.id}
                    imageUrl={i.urls.small}
                    imageLikes={i.likes}
                    imageUser={i.user.username}
                    imageTags={i.tags} />
            })}

        </div>
    )
}

export default Images

