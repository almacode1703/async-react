import React, {useState, useEffect} from 'react'

function FetchAsyncData() {
    const api_url = 'https://dummyjson.com/users';
    const[data, setData] = useState([]);

    const fetchApiData = async ()=> {
        try {
            const fetchData = await fetch(api_url);
            const response  = await fetchData.json()
            setData(response.users);
            console.log("Response : ",response)
        }

        catch(error){
            console.log("Error accessing the API");
        }
    }

    useEffect(()=>{
        fetchApiData()
    },[])

    console.log("Data : ",data)
    return (
        <div>
            { data.map((item) => {
                return  <p key={item.id}>{item.firstName}</p>
            })}
        </div>
    )
}

export default FetchAsyncData
