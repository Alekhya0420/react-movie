import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Nav, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import moviebook from './Nobooksmovies.png';
import { base_url,end_point } from '../api/api';
import '../stylemodules/Cart.css';

function AddToCart() {
    const [cartItems, setCartItems] = useState({ books: [], movies: [] });
    const [userInfo, setUserInfo] = useState({});
    const [comments, setComments] = useState({});
    const [searchMovie, setSearchMovie] = useState("");
    const navigate = useNavigate();
    const api_url = base_url + end_point.registration;
    const userId = localStorage.getItem("StoreId");

    useEffect(() => {
        if (!userId) {
            navigate('/login-page');
            return;
        }

        axios.get(`${api_url}/${userId}`)
            .then(res => {
                setUserInfo(res.data);
                setCartItems({
                    books: res.data.carts?.books || [],
                    movies: res.data.carts?.movies || []
                });
            })
            .catch(error => console.log("axios error", error));
    }, [userId, api_url, navigate]);

    const handleRemoveItem = (type, index) => {
        const updatedCart = { ...cartItems };
        updatedCart[type].splice(index, 1);

        axios.patch(`${api_url}/${userId}`, {carts:updatedCart})
            .then(() => {
                setCartItems(updatedCart);
            })
            .catch(error => console.error('Error updating cart!', error));
    };

    const handleIncrementQuantity = (type, index) => {
        const updatedCart = { ...cartItems };
        updatedCart[type][index].quantity = (updatedCart[type][index].quantity || 0) + 1;

        axios.patch(`${api_url}/${userId}`, { carts: updatedCart })
            .then(() => {
                setCartItems(updatedCart);
            })
            .catch(error => console.error('Error updating cart!', error));
    };

    const handleDecrementQuantity = (type, index) => {
        const updatedCart = { ...cartItems };
        if (updatedCart[type][index].quantity > 1) {
            updatedCart[type][index].quantity -= 1;
        } else {
            updatedCart[type].splice(index, 1);
        }

        axios.patch(`${api_url}/${userId}`, { carts: updatedCart })
            .then(() => {
                setCartItems(updatedCart);
            })
            .catch(error => console.error('Error updating cart!', error));
    };

    const handleCommentChange = (e, itemId) => {
        setComments({
            ...comments,
            [itemId]: e.target.value
        });
    };

    const handleAddComment = (itemId) => {
        const updatedUser = {
            ...userInfo,
            comments: {
                ...userInfo.comments,
                [itemId]: comments[itemId]
            }
        };

        axios.put(`${api_url}/${userId}`, updatedUser)
            .then(() => {
                setUserInfo(updatedUser);
            })
            .catch(error => console.error('Error updating comment!', error));
    };

    const filteredMovies = cartItems.movies.filter(movie =>
        movie.Title.toLowerCase().includes(searchMovie.toLowerCase())
    );

    const noItems = filteredMovies.length === 0 && cartItems.books.length === 0;

    return (
        <div className='d-flex bg-dark'>
            <Nav className="bg-dark flex-column p-3" style={{ width: '250px', height: '100vh' }}>
                <i className="ri-profile-fill fs-1 text-danger mb-3"></i>
                <Nav.Item className="mb-3">
                    <h4 className="text-white">User Info</h4>
                </Nav.Item>
                <Nav.Item className="mb-3">
                    <div className="text-white">
                        <p><strong>Name:</strong> {userInfo.user_name?.charAt(0).toUpperCase() + userInfo.user_name?.slice(1)}</p>
                        <p><strong>Email:</strong> {userInfo.user_mail}</p>
                        <Link to="/Book-info"><p><strong>Books</strong></p></Link>
                        <Link to={`/movie-page/${userInfo.id}`}><p><strong>Movies</strong></p></Link>
                        <Link to="/forgot-password">
                            <Button variant="dark" className='border-primary px-1'>Forgot-password</Button>
                        </Link>
                        <hr />
                        <input
                            type="text"
                            placeholder="Search your items"
                            name="search"
                            onChange={(e) => setSearchMovie(e.target.value)}
                            className="form-control"
                        />
                        <hr />
                    </div>
                </Nav.Item>
            </Nav>

            <Container className='bg-black flex-grow-1'>
                <h1 className='text-danger cart-page'>See your Orders</h1>

                {noItems ? (
                    <div className="text-center">
                        <h3 className="text-white mb-3">No movies or books in cart</h3>
                        <img src={moviebook} alt="No items" />
                    </div>
                ) : (
                    <>
                        <Row>
                            {filteredMovies.length > 0 && (
                                filteredMovies.map((movie, index) => (
                                    <Col md={12} key={index} className="mb-2">
                                        <Card className="border-primary">
                                            <Row>
                                                <Col md={4}>
                                                    <Card.Img variant="top" className="p-3 ms-2" src={movie.Images[0]} alt={movie.Title} style={{ height: '100%', width: "100%" }} />
                                                </Col>
                                                <Col md={8}>
                                                    <Card.Body className='bg-black text-white'>
                                                        <Card.Title className="text-primary">{movie.Title}</Card.Title>
                                                        <Card.Text><strong>Actors:</strong> {movie.Actors}</Card.Text>
                                                        <Card.Text><strong>Plot:</strong> {movie.Plot}</Card.Text>
                                                        <Card.Text><strong>Released:</strong> {movie.Released}</Card.Text>
                                                        <Link to={`${movie.id}`}><Button className='bg-black'>Details</Button></Link>
                                                        <Button className='bg-black' onClick={() => handleRemoveItem('movies', index)}>Delete</Button>
                                                        <Button className="bg-black ms-2" onClick={() => handleDecrementQuantity('movies', index)}>-</Button>
                                                        <Button className="bg-black ms-2" onClick={() => handleIncrementQuantity('movies', index)}>+</Button>
                                                        <Card.Text className='text-danger fs-2'><strong>No Of Order:</strong> {movie.quantity}</Card.Text>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                ))
                            )}
                        </Row>

                        <Row>
                            {cartItems.books.length > 0 && (
                                cartItems.books.map((book, index) => (
                                    <Col md={12} key={index} className="mb-4">
                                        <Card className="border rounded shadow-lg border-primary">
                                            <Row>
                                                <Col md={4}>
                                                    <Card.Img variant="top" className='mt-3' src={book.imageLink} alt={book.title} style={{ height: '450px' }} />
                                                </Col>
                                                <Col md={8}>
                                                    <Card.Body className='bg-black text-white'>
                                                        <Card.Title className="text-primary">{book.title}</Card.Title>
                                                        <Card.Text><strong>Country:</strong> {book.country}</Card.Text>
                                                        <Card.Text><strong>Author:</strong> {book.author}</Card.Text>
                                                        <Card.Text><strong>Language:</strong> {book.language}</Card.Text>
                                                        <Card.Text><strong>Pages:</strong> {book.pages}</Card.Text>
                                                        <Card.Text><strong>Price:</strong> ${book.price}</Card.Text>
                                                        <Button className='border-primary bg-black text-white ms-2' onClick={() => handleRemoveItem('books', index)}>Delete</Button>
                                                        <Link to={`/book-info/${book.id}`}><Button className='border-primary bg-black text-white ms-2'>Details</Button></Link>
                                                        <Button className="border-primary bg-black text-white ms-2" onClick={() => handleDecrementQuantity('books', index)}>-</Button>
                                                        <Button className="border-primary bg-black text-white ms-2" onClick={() => handleIncrementQuantity('books', index)}>+</Button>
                                                        <Card.Text className='text-danger fs-2'><strong>No Of Order:</strong> {book.quantity}</Card.Text>
                                                        <Card.Text className='text-white'>Total price: ${book.quantity * book.price}</Card.Text>
                                                        <input 
                                                            type="text" 
                                                            placeholder="Your comments.." 
                                                            onChange={(e) => handleCommentChange(e, book.id)} 
                                                            className="form-control mb-2" 
                                                        />
                                                        <Button className='bg-black text-white' onClick={() => handleAddComment(book.id)}>Submit</Button>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                ))
                            )}
                        </Row>
                    </>
                )}
            </Container>
        </div>
    );
}

export default AddToCart;
