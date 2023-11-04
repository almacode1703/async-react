import React,{useState} from 'react'

function SearchList() {
    const itemList = ["Iphone", "MacBook", "Play Station"];
    const [searchValue, setSearchValue]  = useState("")
    const [list, setList] = useState(itemList);

    function handleChange(e){
        setSearchValue(e.target.value)
    }

    function handleSearch(){
        if (searchValue === "") {
            setList(itemList);
            return;
        }
        const filteredList = itemList.filter((item)=>{
            if(item.toLowerCase().includes(searchValue.toLowerCase())){
                return item
            }
        })

        setList(filteredList);
    }

    console.log(searchValue)

    return (
        <>
            <div>
                <input type="text"  onChange={(e)=>handleChange(e)}  />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                {list.map((item, id)=>{
                    return <p key={id}>{item}</p>
                })}
            </div>
        </>
    )
}

export default SearchList