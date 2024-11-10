import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Container, Row, Col, Nav, Button, Form } from 'react-bootstrap';
import { base_url, end_point } from '../api/api';
import { Link } from 'react-router-dom';
import '../stylemodules/Book.css';

function Books() {
    const api_url = base_url + end_point.books;
    const res_url = base_url + end_point.registration;

    const [getRegInfo, setData] = useState(null);
    const [getBookinfo, setBook] = useState([]);
    const [searchInput, setSearchInput] = useState(""); 
    const navigate = useNavigate();
    const userId = localStorage.getItem('StoreId'); 

    useEffect(() => {
        axios.get(api_url)
            .then((res) => setBook(res.data))
            .catch((error) => console.log("Error fetching books:", error));
    }, []);

    useEffect(() => {
        if (!userId) return;

        axios.get(`${res_url}/${userId}`)
            .then((res) => setData(res.data))
            .catch((error) => console.log("Error fetching user info:", error));
    }, [userId]);

    const filteredBooks = getBookinfo.filter((book) =>
        book.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

   

    const handleLogOut = () => {
        localStorage.clear();
        navigate('/login-page');
    };
console.log("reg info is",getRegInfo);
    return (
        <div className="d-flex">
            <Nav className="bg-black flex-column" style={{ width: 'auto', height: 'auto', marginBottom: '20px' }}>
                <i className="ri-profile-fill fs-1 text-danger mb-3"></i>
                <div>
                <h4 className="text-white mb-3">User Info</h4>
                </div>
                <div className="text-white mb-3">
                    <p><strong>Name:</strong> {getRegInfo && getRegInfo.user_name ? getRegInfo.user_name.charAt(0).toUpperCase() + getRegInfo.user_name.slice(1) : ""}</p>
                    <p><strong>Email:</strong> {getRegInfo ? getRegInfo.user_mail : ""}</p>
                    <Link to="/Book-info" className="text-primary"><p><strong>Books</strong></p></Link>
                    <Link to={`/movie-page`} className="text-primary"><p><strong>Movies</strong></p></Link>
                    <Link to="/forgot-password">
                        <Button variant="dark" className='border-primary px-1 mb-3' type="submit">
                            Forgot-password
                        </Button>
                    </Link>
                    <Button className='btn btn-danger' onClick={handleLogOut}>Logout</Button>
                </div>
               
                <Form.Control
                    type="text"
                    placeholder="Search books..."
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    className="mb-3"
                    style={{ backgroundColor: 'white', color: 'blue', borderColor: 'white' }}
                />
            </Nav>

            <Container className="bg-black">
                <h1 className='text-danger book-page'>Discover our Books Collection</h1>
                <Row>
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <Col key={index} md={4} className="mb-4">
                                <Card className="border-danger shadow-lg bg-dark rounded">
                                    <Card.Img
                                        variant="top"
                                        src={book.imageLink}
                                        style={{ height: '300px', objectFit: 'cover' }}
                                    />
                                    <Card.Body className="text-white">
                                        <Card.Title className="bg-danger text-white py-2 px-3" style={{ borderRadius: '0.25rem' }}>
                                            {book.title}
                                        </Card.Title>
                                        <Card.Text>
                                           <p><strong>Author:</strong> {book.author}</p>
                                           <p><strong>Country:</strong> {book.country}</p>
                                           <p><strong>Pages:</strong>{book.pages}</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Year:</strong> {book.year}
                                        </Card.Text>
                                        <Link to={`/Book-info/${book.id}`} className='btn btn-danger'>
                                         Details
                                        </Link>

                                    </Card.Body>
                                    <Card.Footer className="bg-white text-dark">
                                        <small>Released: {book.year}</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p className="text-white">No books found.</p>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default Books;
