// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Card, Container, Row, Col, Nav, Button, Form } from 'react-bootstrap';
// import { base_url, end_point } from '../api/api';
// import { Link } from 'react-router-dom';
// import '../stylemodules/movies.css'

// function Movies() {
//     const api_url2 = base_url + end_point.movies;
//     const res_url = base_url + end_point.registration;

//     const {id} = useParams();
//     const navigate = useNavigate();

//     const [getData, setData] = useState([]);
//     const [getRegInfo, setData2] = useState([]);
//     const [searchInput, setSearchInput] = useState(""); // Add state for search input

//     useEffect(() => {
//         axios.get(api_url2)
//             .then((res) => setData(res.data))
//             .catch((error) => console.log("Error fetching movies:", error));
//     }, []);

//     useEffect(() => {
//         axios.get(`${res_url}/${id}`)
//             .then((res) => setData2(res.data))
//             .catch((error) => console.log("Error fetching user info:", error));
//     }, [id]);

//     const filteredMovies = getData.filter((movie) =>
//         movie.Title.toLowerCase().includes(searchInput.toLowerCase())
//     );

//     const handleSearchInputChange = (event) => {
//         setSearchInput(event.target.value);
//     };

//     const handleAddToCart = (movie) => {
//         let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         const existingItemIndex = cartItems.findIndex(item => item.id === movie.id);
    
       
//         if (existingItemIndex !== -1) 
//         {
//            console.log("already in cart")
//         } 
//         else 
//         {
//             movie.quantity = 1;
//             cartItems.push(movie);
//         }
    
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     };
    
//     function handleLogout()
//     {
//         localStorage.clear();
//         navigate('/login-page')
//     }
//     return (
//         <div className="d-flex">
//             <Nav className="bg-black flex-column" style={{ width: 'auto', height: 'auto', marginBottom: '20px' }}>
//                 <i className="ri-profile-fill fs-1 text-danger mb-3"></i>
//                 <h4 className="text-white mb-3">User Info</h4>
//                 <div className="text-white mb-4">
// <p><strong>Name:</strong>{getRegInfo && getRegInfo.user_name?getRegInfo.user_name.charAt(0).toUpperCase()+getRegInfo.user_name.slice(1):" "}</p>                    
//                     <p><strong>Email:</strong> {getRegInfo.user_mail}</p>
//                     <Link to="/Book-info" className="text-primary"><p><strong>Books</strong></p></Link>
//                     <Link to={`/movie-page/${getRegInfo.id}`} className="text-primary"><p><strong>Movies</strong></p></Link>
//                     <Link to="/forgot-password">
//                         <Button variant="dark" className='border-primary px-1 mb-3' type="submit">
//                             Forgot-password
//                         </Button>
//                     </Link>
//                     <br></br>
//                     <Button variant="danger" onClick={handleLogout} className="mt-3">
//                         Logout
//                     </Button>
//                     <br></br>
//                     <Link to="/add-to-cart">See Orders</Link>
//                     <Form.Control
//                         type="text"
//                         placeholder="Search movies..."
//                         value={searchInput}
//                         onChange={handleSearchInputChange}
//                         className="mt-3"
//                         style={{ backgroundColor: 'white', color: 'blue', borderColor: 'white' }}
//                     />
//                 </div>
//             </Nav>

//             <Container className="bg-black">
//                 <h1 className='text-danger movies-page'>Discover our Movies Collection</h1>
//                 <Row>
//                     {filteredMovies.map((movie, index) => (
//                         <Col key={index} md={4} className="mb-4">
//                             <Card className="border-danger shadow-lg bg bg-dark rounded">
//                                 <Card.Img
//                                     variant="top"
//                                     src={movie.Images}
//                                     alt={movie.Title}
//                                     style={{ height: '300px', objectFit: 'cover' }}
//                                 />
//                                 <Card.Body className="text-white">
//                                     <Card.Title className="bg-danger text-white py-2 px-3" style={{ borderRadius: '0.25rem' }}>
//                                         {movie.Title}
//                                     </Card.Title>
//                                     <Card.Text>
//                                         <strong>Actors:</strong> {movie.Actors}
//                                     </Card.Text>
//                                     <Card.Text>
//                                         <strong>Director:</strong> {movie.Director}
//                                     </Card.Text>
//                                     <Card.Text>
//                                         <strong>Released:</strong> {movie.Released}
//                                     </Card.Text>
//                                     <Button variant="primary" onClick={() => handleAddToCart(movie)}>
//                                         Add to Cart
//                                     </Button>
//                                 </Card.Body>
//                                 <Card.Footer className="bg-white text-dark">
//                                     <small>Released: {movie.Released}</small>
//                                 </Card.Footer>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </div>
//     );
// }

// export default Movies;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col, Nav, Button, Form } from 'react-bootstrap';
import { base_url, end_point } from '../api/api';
import { Link } from 'react-router-dom';
import '../stylemodules/Book.css';

const Movies = () => {
    const movie_url = base_url + end_point.movies;
    const res_url = base_url + end_point.registration;

    const [getRegInfo, setData] = useState(null);
    const [movies, setMovies] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const userId = localStorage.getItem('StoreId'); // Retrieve user ID from local storage

    useEffect(() => {
        if (!userId) {
            console.error('User ID is not available in local storage.');
            return;
        }

        // Fetch movies data
        axios.get(movie_url)
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching movies data!', error);
            });

        // Fetch user info data
        axios.get(`${res_url}/${userId}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching user info!', error);
            });
    }, [userId]);

    const filteredMovies = movies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleLogOut = () => {
        localStorage.clear();
        navigate('/login-page');
    };

    return (
        <div className="d-flex">
            <Nav className="bg-black flex-column" style={{ width: 'auto', height: 'auto', marginBottom: '20px' }}>
                <i className="ri-profile-fill fs-1 text-danger mb-3"></i>
                <h4 className="text-white mb-3">User Info</h4>
                <div className="text-white mb-3">
<p><strong>Name:</strong>{getRegInfo && getRegInfo.user_name?getRegInfo.user_name.charAt(0).toUpperCase() + getRegInfo.user_name.slice(1) : ""}</p>
<p><strong>Email:</strong> {getRegInfo ? getRegInfo.user_mail : ""}</p>
                    <Link to="/Book-info" className="text-primary"><p><strong>Books</strong></p></Link>
                    <Link to={`/movie-page/${getRegInfo ? getRegInfo.id : ""}`} className="text-primary"><p><strong>Movies</strong></p></Link>
                    <Link to="/forgot-password">
                        <Button variant="dark" className='border-primary px-1 mb-3' type="submit">
                            Forgot-password
                        </Button>
                    </Link>
                    <Button className='btn btn-danger' onClick={handleLogOut}>Logout</Button>
                </div>
                <Form.Control
                    type="text"
                    placeholder="Search movies..."
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    className="mb-3"
                    style={{ backgroundColor: 'white', color: 'blue', borderColor: 'white' }}
                />
            </Nav>

            <Container className="bg-black">
                <h1 className='text-danger book-page'>Discover our Movies Collection</h1>
                <Row>
                    {filteredMovies.length > 0 ? (
                        filteredMovies.map((movie, index) => (
                            <Col key={index} md={4} className="mb-4">
                                <Card className="border-danger shadow-lg bg-dark rounded">
                                    <Card.Img
                                        variant="top"
                                        src={movie.Images[0]}
                                        alt={movie.Title}
                                        style={{ height: '300px', objectFit: 'cover' }}
                                    />
                                    <Card.Body className="text-white">
                                        <Card.Title className="bg-danger text-white py-2 px-3" style={{ borderRadius: '0.25rem' }}>
                                            {movie.Title}
                                        </Card.Title>
                                        <Card.Text>
                                            <strong>Director:</strong> {movie.Director}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Country:</strong> {movie.Country}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Price:</strong> ${movie.price}
                                        </Card.Text>
                                        
                                        <Link to={`/movie-page/${movie.id}`}>
                                        <button className='btn btn-danger'>know more</button>
                                        </Link>
                            
                                    </Card.Body>
                                    <Card.Footer className="bg-white text-dark">
                                        <small>Released: {movie.Year}</small>
                                    </Card.Footer>

                                  
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p className="text-white">No movies found.</p>
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Movies;
