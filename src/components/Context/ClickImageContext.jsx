import {useContext, createContext, useState, useEffect} from 'react'

const OpenedImageContext = createContext({});

// Custom hook to use the OpenedImageContext
export const useOpenedImage = () => {
  return useContext(OpenedImageContext);
}

// Context provider component
export const OpenedImageProvider = ({ children }) => {

  const [openedImage, setOpenedImage] = useState([]);

   // Function to handle click event
   const handleClick = (imageUrl) => {
      setOpenedImage(imageUrl);
  }


   // Function to remove image from local storage
   const removeImage = () => {
    setOpenedImage([]);
  }

  // for downloading selected image 
  const downloadImage = (imageUrl, imageName) => {
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


  // Context value to be provided to consumers
  const contextValue = {
    openedImage,
    handleClick,
    removeImage,
    downloadImage,
  };
  
  return (
    <OpenedImageContext.Provider value={contextValue}>
      {children}
    </OpenedImageContext.Provider>
  );

}
