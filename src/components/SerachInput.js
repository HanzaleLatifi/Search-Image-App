import { useState } from 'react'

function SerachInput({ getTerm }) {

    const [search, setSearch] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        getTerm(search)
        console.log(search)
    }
    return (
        <div className="flex justify-center ">
            <form className="my-4 shadow-md  " onSubmit={submitHandler}>
                <input onChange={(e) => setSearch(e.target.value)} value={search} className= "outline-none md:px-8 px-4 " placeholder="search here ..." />
                <button type="submit" className="bg-green-200 p-2 md:px-4 ">Search</button>
            </form>
        </div>
    )
}

export default SerachInput
