import './App.css'
import { ProductCard, ProductContainer } from './ProductCard'
import { Nav } from './Nav'

const products = [
  {
    prName: "Aire 1",
    prPrice: 200
  },
  {
    prName: "Aire 2",
    prPrice: 300
  },
  {
    prName: "Aire 3",
    prPrice: 2100
  },
  {
    prName: "Aire 4",
    prPrice: 7500
  },
  {
    prName: "Aire 5",
    prPrice: 2900
  }
]

export function App() {

  return (
    <>
      <Nav />
      <ProductContainer>
        {products.map(({ prName, prPrice }) => {

          return(
            <ProductCard key={prName} prPrice={prPrice}>{prName}</ProductCard>
          )

        })}
      </ProductContainer>
    </>
  )
}
