import React,{useState, useEffect} from 'react'

function SimpleSearch() {
    const api_url = 'https://dummyjson.com/users';
    const [searchValue, setSearchValue]  = useState("")
    const [list, setList] = useState([]);


    const fetchAPIdata = async () => {
        try {
            const apiData = await fetch(api_url);
            const response = await apiData.json();
            return response
            setList(response.users)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchAPIdata()
    },[])


    function handleChange(e){
        setSearchValue(e.target.value)
    }

    function handleSearch(){
        if (searchValue === "") {
            return;
        }
       const filteredList = list.filter((item)=>{
          if(item.firstName.toLowerCase().includes(searchValue.toLowerCase())){
              return item.firstName;
          }
       })
        setList(filteredList);
    }

    return (
        <>
             <div>
                <input type="text"  onChange={(e)=>handleChange(e)}  />
                <button onClick={handleSearch}>Search</button>
             </div>
             <div>
                 {list.map((item)=>{
                        return <p key={item.id}>{item.firstName}</p>
                 })}
             </div>
        </>
    )
}

export default SimpleSearch