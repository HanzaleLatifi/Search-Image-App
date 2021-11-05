import Image from "./Image"


function Images({images}) {
    return (
        <div className="flex justify-center flex-wrap items-center">
            {images.map(i=>{
                return <Image imageUrl={i.urls.thumb}/>
            })}
            
        </div>
    )
}

export default Images

