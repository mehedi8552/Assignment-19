
import {BrowserRouter,Route,Routes} from "react-router-dom";

import Homepage from './Pages/Homepage';
import Products from './Pages/Products'
import Contacts from './Pages/Contacts'
import Cart from './Pages/Cart'
import Blog from './Pages/Blog';
import Four0Four from './Component/Com_404la';
import CheckoutPage from './Pages/CheckoutPage';
import Thankyou from './Pages/ThankYouPage';
import Faq from './Pages/FAQ';
import Reviews from './Pages/ReviewsOrCases';
import Search_results from './Pages/SearchResultsPage';
import Policy from './Pages/PrivacyPolicyAndTerms';
import Registration  from './Pages/AccountRegistrationPage';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
     <BrowserRouter>
            <Routes>
                <Route path='/' element ={<Homepage/>}></Route>
                <Route path='/products' element ={<Products/>}></Route>
                <Route path='/contacts' element ={<Contacts/>}></Route> 
                <Route path='/cart' element ={<Cart/>}></Route> 
                <Route path='/blog' element ={<Blog/>}></Route> 
                <Route path='/CheckoutPage' element ={<CheckoutPage/>}></Route>
                <Route path='/Four0Four' element ={<Four0Four/>}></Route>
                <Route path='/Thankyou' element ={<Thankyou/>}></Route>
                <Route path='/Faq' element ={<Faq/>}></Route>
                <Route path='/Reviews' element ={<Reviews/>}></Route>
                <Route path='/Search_results' element ={<Search_results/>}></Route>
                <Route path='/Policy' element ={<Policy/>}></Route>
                <Route path='/Registration' element ={<Registration/>}></Route>
            </Routes>
            </BrowserRouter>
    </>
 


)
}

export default App
