import React from 'react'
import { useEffect, useState } from 'react'
import './productApp.css'
import { useProduct } from './useProduct'
import { OFFERS, PRODUCT_OFFER_MAPPING } from './data'
import Offer from './Offer'

const ProductApp = () => {
    const [product, nextProduct, previousProduct] = useProduct()
    const [offers, setOffers] = useState([])

    function getOffers(p) {
        const offerRecords = PRODUCT_OFFER_MAPPING.filter(record => record.pid == product.id ? record : null)

        const offerIds = offerRecords.map(record => record.oid)

        const offersList = OFFERS.filter(offer => offerIds.includes(offer.id) ? offer : null)

        setOffers(offersList)
    }

    useEffect(() => {
        getOffers(product)
    }, [product])

    return (
        <div className="App">
            <button onClick={() => previousProduct()} >Previous</button>{" "}
            <button onClick={() => nextProduct()} >Next</button>

            {
                product ?
                    <div className='card'>
                        {
                            <>
                                <h3>{product.title}</h3>
                                <h5>{product.price}</h5>
                            </>
                        }
                    </div>
                    : <h3>No product to show!</h3>
            }

            {
                offers ?
                    <Offer offers={offers} />
                    : <h3>No offers to show!</h3>
            }


        </div>
    )
}


export default ProductApp