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
                <input onChange={(e) => setSearch(e.target.value)} value={search} className="border-b-2 border-blue-500 outline-none px-2 py-1 "  />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SerachInput
