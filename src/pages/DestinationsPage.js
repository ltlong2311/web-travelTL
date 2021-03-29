import React from 'react'
import DestinationsDetails from '../Component/Destinations/DestinationsDetails'
import HeaderVideo from '../Component/Header/HeaderVideo'

function DestinationsPage() {
    return (
        <div className="asia-destinations destinations-page">
            <HeaderVideo video="/videos/video-2.mp4" title="DU LỊCH CHÂU Á"/>
            <DestinationsDetails />
        </div>
    )
}

export default DestinationsPage
