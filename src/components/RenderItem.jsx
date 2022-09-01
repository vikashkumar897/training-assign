import { useEffect, useState } from "react"
import { productsById } from "../utils/getProduct"

const styles = {
    backButton: { display: "block", margin: "0 auto 16px" },
    image: { maxWidth: "90%", height: "800px" },
}

export const RenderItem = ({ selctedItem, setSelctedItem, setIsLoading, isLoading }) => {
    const [itemDetails, setItemDetails] = useState({})
    useEffect(() => {
      setIsLoading(true)
      productsById(selctedItem).then(d => { setItemDetails(d); setIsLoading(false) })
    }, [])

    return (
      isLoading ? <h1>Loading...</h1> :
        <div>
          <button onClick={() => setSelctedItem(0)} style={styles.backButton}>Back</button>
          <img src={itemDetails.image} alt="img-lrg" style={styles.image} />
          <p>Rating: {itemDetails.rating?.rate}   ({itemDetails.rating?.count})</p>
          <h3>{itemDetails.title}</h3>
          <h4>Price: ${itemDetails.price}</h4>
          <p>{itemDetails.description}</p>
        </div>
    )
  }