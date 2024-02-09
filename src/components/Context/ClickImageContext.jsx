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
   const handleClick = (imageURL) => {
    try {
      localStorage.setItem('selectedImage', JSON.stringify(imageURL));
      console.log('Image saved successfully');
      setOpenedImage(imageURL);
    } catch (error) {
      console.log('Error saving image', error);
    }
  }


   // Function to remove image from local storage
   const removeImage = () => {
    localStorage.removeItem('selectedImage')
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

  useEffect(() => {
    const setToLocalstorage = JSON.parse(localStorage.getItem('selectedImage'));
    setOpenedImage(setToLocalstorage || []);
  }, []);

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
