import React from 'react'
import {useClickImage} from '../Context/ClickImageContext'

function ClickImage() {
    const {selectedImage, handleCancelClick} = useClickImage()
  return (
    <div>
        {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected Image" />
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      )}
    </div>
  )
}

export default ClickImage