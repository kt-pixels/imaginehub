import { useState, createContext, useContext, useEffect } from "react";

// MAKE CONTEXT
const FavoritesContext = createContext();


// MAKING HOOK 
export const useFavoriteContext = () => {
    return useContext(FavoritesContext);
}


// MAKING HOOK PROVIDER

export const FavoritesProvider = ({children}) => {

    // Get images from local storage USING useEffect HOOK
        const storeFavImages = JSON.parse(localStorage.getItem('Favorite')) || [];

    const [FavImage, setFavImage] = useState(storeFavImages)

    // Set OR Send Image to Local Storage

    useEffect(() => {
        localStorage.setItem('Favorite', JSON.stringify(FavImage));
    }, [FavImage])


    //  ADD IMAGES

    const addToFavorite = (imageUrl) => {
        setFavImage((prevImage) => [...prevImage, imageUrl])
    }

    // Remove image from fav.

    const removeFromFav = (imageUrl) => {
        setFavImage((prevImage) => prevImage.filter((fav) => fav !== imageUrl))
    }

    // Making Download Image Link

    const downloadOnClick = (imageUrl, imageName) => {
        // create anchor tag 
        const downloadLink = document.createElement('a');

        // set href or download attribute
        downloadLink.href = imageUrl;
        downloadLink.download = imageName || 'downloaded-image'

        // append anchor tag
        document.body.appendChild(downloadLink);

        // download on click
        downloadLink.click()

        // remove anchor tag
        document.body.removeChild(downloadLink)
    }



    return (
        <FavoritesContext.Provider value={{FavImage, addToFavorite, removeFromFav, downloadOnClick}}>
            {children}
        </FavoritesContext.Provider>
    )
}