// import React from 'react'
// import Header from '../layout/Header'
// import Registration from '../registration/Registration'
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Login from '../login/Login'
// import Movies from '../movies/Movies'
// import Books from '../movies/Books'
// import Forgot from '../ForgotPassWord/Forgot'
// import AddToCart from '../movies/AddToCart'
// import Home from '../home/Home'
// import Footer from '../layout/Footer'
// import ProductDetails from '../movies/ProductDetails'
// import BookDetail from '../movies/BookDetail'


// function Routing() {
//   return (
//     <div>
//         <Router>
//             <Header></Header>
//             <Routes>
//                 <Route path='/' element={<Registration/>}/>
//                 <Route path="/Book-info" element={<Books/>}/>
//                 <Route path="/login-page" element={<Login/>}/>
//                 <Route path="/movie-page/:id" element={<Movies/>}/>
//                 <Route path="/forgot-password" element={<Forgot/>}/>
//                 <Route path="/add-to-cart" element={<AddToCart/>}/>
//                 <Route path='/home-page' element={<Home/>}/>
//                 <Route path='/add-to-cart/:myprod' element={<ProductDetails/>}/>
//                 <Route path='/book-info/:mybook' element={<BookDetail />} />
//             </Routes>
//             <Footer></Footer>
//         </Router>
//     </div>
//   )
// }

// export default Routing


import React, {lazy,Suspense} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


import Home from '../home/Home';
import ProtectedRoutes from '../Auth/isAuth';
const Header = lazy(() => import('../layout/Header'));
const Registration = lazy(() => import('../registration/Registration'));
const Login = lazy(() => import('../login/Login'));
const Movies = lazy(() => import('../movies/Movies'));
const Books = lazy(() => import('../movies/Books'));
const Forgot = lazy(() => import('../ForgotPassWord/Forgot'));
const Footer = lazy(() => import('../layout/Footer'));
const MovieDetails = lazy(() => import('../movies/MovieDetails'));
const BookDetail = lazy(() => import('../movies/BookDetail'));

function Routing() {
  return (
    <Router>

        <Header/>
      <Routes>
        
  
<Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Registration/></Suspense>}/>        
    <Route path="/Book-info" element={<Suspense fallback={<div>Loading...</div>}><Books /></Suspense>} />

    
  <Route path="/login-page" element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>}/>
   

    <Route element={<ProtectedRoutes/>}>
<Route path="/movie-page" element={<Suspense fallback={<div>Loading...</div>}><Movies/></Suspense>}/>
    </Route>
    
    <Route path="/forgot-password" element={<Suspense fallback={<div>Loading...</div>}><Forgot /></Suspense>} />
    <Route path="/home-page" element={<Home />} />
    <Route path="/movie-page/:myprod" element={<Suspense fallback={<div>Loading...</div>}><MovieDetails/></Suspense>} />
    <Route path="/book-info/:mybook" element={<Suspense fallback={<div>Loading...</div>}><BookDetail /></Suspense>} />
      </Routes>
     
        <Footer />
    </Router>
  );
}

export default Routing;
