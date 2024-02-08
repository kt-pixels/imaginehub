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
    try {
      // Save the selected image URL to local storage
      localStorage.setItem('selectedImage', JSON.stringify(imageUrl));
      console.log('Image saved successfully');
      // Update the context state
      setOpenedImage(imageUrl);
    } catch (error) {
      console.log('Error saving image', error);
    }
  }

   // Function to remove image from local storage
   const removeImage = () => {
    localStorage.removeItem('selectedImage');
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

  // add to collection


  // Effect to load the saved image URL from local storage on component mount
  useEffect(() => {
    // Load the saved image URL from local storage on component mount
    const savedImage = JSON.parse(localStorage.getItem('selectedImage')) || [];
    setOpenedImage(savedImage); // Set to empty string if not found
  }, [savedImage]);

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
