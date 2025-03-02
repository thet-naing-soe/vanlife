import React from 'react'
import { useParams } from 'react-router-dom'

export default function HostVans() {
  const {id} = useParams()
  const [currentVan, setCurrentVan] = React.useState(null)
  React.useEffect(()=> {
    fetch(`/api/host/vans/${id}`)
      .then((response) => response.json())
      .then((data) => setCurrentVan(data.vans))
  },[])

  if(!currentVan) return <h2>Loading...</h2>
  return(
    <section>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
            </div>
        </section>
  )
}
