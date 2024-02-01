import { useState, createContext, useContext, useEffect } from "react";

const ClickOnImage = createContext();

export const useClickImage = () => {
  return useContext(ClickOnImage);
};

export const ClickOnImageProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    // Save the selected image to local storage
    localStorage.setItem("selectedImage", imageUrl);
    setSelectedImage(imageUrl);
  };

useEffect(()=> {
    localStorage.setItem('selectedImage', selectedImage)
}, [selectedImage])

  const handleCancelClick = () => {
    // Remove the selected image from local storage
    localStorage.removeItem("selectedImage");
    setSelectedImage(null);
  };

  return (
    <ClickOnImage.Provider value={{selectedImage, handleImageClick, handleCancelClick}}>
        {children}
    </ClickOnImage.Provider>
  )
};
