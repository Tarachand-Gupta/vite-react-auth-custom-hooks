import React from 'react'

const Offer = ({ offers }) => {
    return (
        <div className='card'><h2> Availabe offers:</h2>
            {
                offers.map(offer => (
                    <h3 key={offer.id}>{offer.discount}</h3>
                ))
            }
        </div>
    )
}

export default Offer