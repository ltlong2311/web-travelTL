import React from 'react'
import Header from '../Header/Header'
import TourDetail from '../Home/Tour/TourDetail/TourDetail'

function TourDetailPage(props) {
    return (
        <div className="tour-detail-page">
          <Header title={'TOUR'} longTime="8 ngày/ 7 đêm" image='../img/tn-01.jpg' />
          <TourDetail />
        </div>
    )
}

export default TourDetailPage
