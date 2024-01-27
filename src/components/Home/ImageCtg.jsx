import React, { useState } from 'react'
import Images from '../../images.json'


function ImageCtg() {
    const [category, setCategory] = useState(Images)

    const filterCtg = (currentCtg) => {
        const updateCtg = Images.filter((filter) => 
            {
                return filter.Ctg === currentCtg
            }
        )
        setCategory(updateCtg)
    }

  return (
    <div>
    </div>
  )
}

export default ImageCtg