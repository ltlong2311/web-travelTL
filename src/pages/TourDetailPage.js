import React from 'react'
import Header from '../Component/Header/Header'
import dataTourFavorite from '../Component/dataTourFavorite.json'
import dataTour from '../Component/tourData.json'
import TourReview from '../Component/Tour/TourReview'
import TourRelated from '../Component/Tour/TourRelated'
import TourSubscribe from '../Component/Tour/TourSubscribe'
import TourContact from '../Component/Tour/TourContact'
import './TourDetailPage.css'
import TourInfo from '../Component/Tour/TourInfo'
import TourHighlights from '../Component/Tour/TourHighlights'


function TourDetailPage(props) {
    console.log(props);
    const slugId = parseInt(props.match.params.id);
    return (
        <div className="tour-detail-page">
          {dataTourFavorite.map((value,key) => {
            if(value.id === slugId){
                return(
                  <div key={key}>
                    <Header 
                      title={value.tourName} 
                      longTime={value.days} 
                      image={value.image} 
                    />
                    <TourReview
                      valueTourFavorite={value}
                      place={value.place}
                      tourName={value.tourName}
                      longTime={value.days}
                      icon={value.icon}
                      reviews={value.reviews}
                    />
                    <TourHighlights />
                    <TourInfo />
                    <TourRelated />
                    <TourContact />
                    <TourSubscribe />
                  </div>  
                )
            }
            return null
        })}
        {dataTour.map((value,key) => {
            if(value.id === slugId){
                return(
                  <div key={key}>
                    <Header 
                      title={value.tourName} 
                      longTime={value.longTime} 
                      image={value.image} 
                    />
                    <TourReview
                      valueTourFavorite={value}
                      icon={value.icon}
                      place={value.place}
                      tourName={value.tourName}
                      reviews={value.reviews}
                    />
                    <TourHighlights />
                    <TourInfo />
                    <TourRelated />
                    <TourContact />
                    <TourSubscribe />
                  </div>  
                )
            }
            return null
        })}
      </div>
    )
}

export default TourDetailPage
