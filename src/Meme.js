import React from "react";
import Data from './Data.js';



export default function Meme() {

    //const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"

    })

    const [allMemeImage, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))

    }, [])

    /* --------------------------------------------------------------
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemeImages(data.data.memes)

        }
        getMemes()
        return () =>{

        }
        
    }, []) 
     for using cleanup function with async one need use this like above
    -----------------------------------------------------------------*/



    function getMemeImage() {
        //const memesArray = allMemeImage.data.memes
        const randomNumber = Math.floor(Math.random() * allMemeImage.length)
        const url = allMemeImage[randomNumber].url // it will not work 
        /* setMeme(memesArray[randomNumber].url) */
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }

        })

    }
    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return <main>
        <div className="form">
            <input type="text" className="form--input" name="topText" placeholder="Top text" onChange={handleChange} value={meme.topText} />
            <input type="text" className="form--input" name="bottomText" placeholder="Bottom text" onChange={handleChange} value={meme.bottomText} />
            <button
                className="form--btn"
                onClick={getMemeImage}
            >
                Get a new meme image @
            </button>
            <div className="meme">

                <img src={meme.randomImage} className="meme-img" />
                <h2 className="meme-text-top" >{meme.topText}</h2>
                <h2 className="meme-text-bottom" value="">{meme.bottomText}</h2>
            </div>

        </div>
    </main>
}

