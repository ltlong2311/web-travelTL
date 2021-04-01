import React from 'react'
import DestinationsTour from '../Component/Destinations/DestinationsTour'
import DestinationsReview from '../Component/Destinations/DestinationsReview'
import HeaderVideo from '../Component/Header/HeaderVideo'
import DestionationsHotel from '../Component/Destinations/DestionationsHotel'
import DestinationsContact from '../Component/Destinations/DestinationsContact'

function DestinationsPage() {
    return (
        <div className="destinations-page">
            <HeaderVideo video="/videos/video-2.mp4" title="DU LỊCH CHÂU Á" />
            <DestinationsReview />
            <DestinationsTour />
            <DestionationsHotel />
            <DestinationsContact />
        </div>
    )
}

export default DestinationsPage
