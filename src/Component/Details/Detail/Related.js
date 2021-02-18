import React from 'react'

function Related(props) {
    return (
        <div className="col-md-3 mb-2">
            <div className="card-deck">
                <div className="card">
                    <a href="/details"><img className="card-img-top" height={150} src={props.img} alt="" /></a>
                    <div className="card-body">
                    <h4><a href="detail.html">{props.title}</a></h4>
                    <hr />
                    <p className="card-text">{props.quote}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Related
