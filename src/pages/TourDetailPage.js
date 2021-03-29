import React from 'react'
import Header from '../Component/Header/Header'
import TourDetail from '../Component/Home/Tour/TourDetail/TourDetail'
import dataTourFavorite from '../Component/dataTourFavorite.json'
import dataTour from '../Component/tourData.json'

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
                    <TourDetail
                      valueTourFavorite={value}
                      img={value.img}
                      place={value.place}
                      tourName={value.tourName}
                      longTime={value.days}
                      cost={value.cost}
                      quote={value.quote}
                      reviews={value.reviews}
                    />
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
                    <TourDetail
                      valueTourFavorite={value}
                      img={value.img}
                      place={value.place}
                      tourName={value.tourName}
                      longTime={value.longTime}
                      cost={value.cost}
                      quote={value.quote}
                      reviews={value.reviews}
                    />
                  </div>  
                )
            }
            return null
        })}
      </div>
    )
}

export default TourDetailPage
