import React from 'react'
import DestinationTour from '../Component/Destinations/DestinationTour'
import DestinationReview from '../Component/Destinations/DestinationReview'
import HeaderVideo from '../Component/Header/HeaderVideo'
import DestinationHotel from '../Component/Destinations/DestinationHotel'
import DestinationContact from '../Component/Destinations/DestinationContact'
import './DestinationPage.css'

function DestinationsPage() {
    return (
        <div className="destinations-page">
            <HeaderVideo video="/videos/video-2.mp4" title="DU LỊCH CHÂU Á" />
            <DestinationReview iconContact="/img/icon-menu/icon-contacts.png"/>
            <DestinationTour />
            <DestinationHotel />
            <DestinationContact />
        </div>
    )
}

export default DestinationsPage
