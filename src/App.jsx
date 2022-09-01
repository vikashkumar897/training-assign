import { Fragment, useEffect, useState } from 'react';
import './App.css';
import { LeftPanel } from './components/LeftPanel';
import { Pagination } from './components/Pagination';
import { RenderItem } from './components/RenderItem';
import { RightPanel } from './components/RightPanel';
import { allCatogeries, productByCategory } from './utils/getProduct';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [catogeries, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)
  const [productCount, setProductCount] = useState(0)
  const [activeCategory, setActiveCategory] = useState("All Category")
  const [selctedItem, setSelctedItem] = useState(0)

  useEffect(() => {
    setIsLoading(true);
    productByCategory(activeCategory, page).then(d => { setProducts(d.slice(page * 3)); setIsLoading(false) })
  }, [page, activeCategory])
  
  useEffect(() => {
    setIsLoading(true);
    productByCategory(activeCategory, 999).then(d => { setProductCount(d.length); setIsLoading(false) })
  }, [activeCategory])

  useEffect(() => {
    setIsLoading(true);
    allCatogeries().then(d => d.json()).then(d => setCategories(["All Category", ...d]))
    productByCategory(activeCategory, 999).then(d => { setProductCount(d.length); setIsLoading(false) })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='leftContainer'>
            <LeftPanel catogeries={catogeries} setActiveCategory={setActiveCategory} setPage={setPage} setSelctedItem={setSelctedItem} activeCategory={activeCategory} selctedItem={selctedItem} />
          </div>
          <div className='rightContainer'>
            {!selctedItem ? 
              <Fragment>
                <Pagination setPage={setPage} page={page} productCount={productCount} />
                {isLoading ? <h1>Loading...</h1> : <RightPanel products={products} setSelctedItem={setSelctedItem} />}
              </Fragment> :
              <RenderItem selctedItem={selctedItem} setSelctedItem={setSelctedItem} isLoading={isLoading} setIsLoading={setIsLoading} />
            }

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
