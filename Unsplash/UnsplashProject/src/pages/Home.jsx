import data from '../../products.json'
import Product from '../assets/components/product'
export default function Home() {

  return (
    <div>
      <Product data = {data}/>
    </div>
  )
}
