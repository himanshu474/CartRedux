import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import PageContainer from './containers/PageContainer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import Search from './pages/Search'


function App(){
  return (
    <>
    <PageContainer>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:id" element={<Detail/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/products/search" element={<Search/>} />
    </Routes>
    </PageContainer>
    </>
  )
}

export default App