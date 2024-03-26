import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

// const api_keyi = 'RPx02mJee2FQxZC34v9tr8Vs6qPOcgbI'
const Tags = () => {

    const [tags, setTags] = useState('car')
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState('false')

    async function fetchData() {
        setLoading(true)
        const url = `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S&tags=${tags}`;
        const { data } = await axios.get(url)
        const imageSource = data.data.images.downsized_large.url
        console.log(imageSource)
        setGif(imageSource)
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [])
    function clickHandler() {
        fetchData()
    }


    return (
        <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-2'>
            <h1 className='text-2xl font-semibold mt-[15px] '>Random gif</h1>
            {loading ? (<Spinner />) : (<img src={gif} alt="" width="450px" />)}

            <input type="text" className='w-10/12 text-lg rounded-lg py-2 mb-[2px] '
                onChange={(event) => setTags(event.target.value)} value={tags} />

            <button onClick={clickHandler}
                className='w-10/12 bg-green-200 text-lg rounded-lg py-2 mb-[15px]'> Generate Random Gif</button>
        </div>
    )
}

export default Tags

