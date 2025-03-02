import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVansPhotos() {
  const {currentVan} = useOutletContext()
  return(
      <img src={currentVan.imageUrl} alt="" className="host-van-detail-image" />
  )
}
