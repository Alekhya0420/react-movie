import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url, end_point } from '../api/api';
import { Container, Button, Nav, Card, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

function MovieDetails() {
    const [movie, setMovie] = useState({});
    const [userinfo, setUserInfo] = useState({});
    const { myprod } = useParams();
    const api_url = base_url + end_point.movies;
    const api_user = base_url + end_point.registration;
    const userid = sessionStorage.getItem("StoreId");

    // Fetch user info
    function fetchUserInfo() {
        axios.get(`${api_user}/${userid}`)
            .then((res) => {
                setUserInfo(res.data);
                console.log("User info:", res.data);
            })
            .catch((error) => console.log("Error fetching user info:", error));
    }

    // Fetch movie info
    function fetchMovieInfo() {
        axios.get(`${api_url}/${myprod}`)
            .then((res) => {
                setMovie(res.data);
                console.log("Movie info:", res.data);
            })
            .catch((error) => console.log("Error fetching movie info:", error));
    }

    useEffect(() => {
        fetchUserInfo();
        fetchMovieInfo();
    }, []);

    return (
        <div className='d-flex'>
            <Nav className="bg-black flex-column p-3" style={{ width: '250px', height: '100vh' }}>
                <i className="ri-profile-fill fs-1 text-danger mb-3"></i>
                <Nav.Item className="mb-3">
                    <h4 className="text-white">User Info</h4>
                </Nav.Item>
                <Nav.Item className="mb-3">
                    <div className="text-white">
                        <p><strong>Name:</strong> {userinfo.user_name}</p>
                        <p><strong>Email:</strong> {userinfo.user_mail}</p>
                        <Link to="/Book-info"><p><strong>Books</strong></p></Link>
                        <Link to={`/movie-page/${userinfo.id}`}><p><strong>Movies</strong></p></Link>
                        <Link to="/forgot-password">
                            <Button variant="dark" className='border-primary px-1' type="submit">Forgot Password</Button>
                        </Link>
                        <hr />
                    </div>
                </Nav.Item>
            </Nav>

            <Container className="mt-4">
                <Row>
                
                    <Col md={8} className='mb-3'>
                        <Card className="shadow-lg p-3 border border-primary rounded">
                            <Card.Body>
                                <Card.Title className="text-warning mb-3" style={{ fontSize: '2rem', fontWeight: 'bold' }}>{movie.Title}</Card.Title>
                                <Card.Subtitle className="text-muted mb-4" style={{ fontSize: '1.25rem' }}>Released: {movie.Released}</Card.Subtitle>
                                <Card.Text className="bg-dark text-danger p-3 rounded fs-4">
                                    <p><strong>Plot:</strong> {movie.Plot}</p>
                                    <p><strong>Director:</strong> {movie.Director}</p>
                                    <p><strong>Genre:</strong> {movie.Genre}</p>
                                    <p><strong>Actors:</strong> {movie.Actors}</p>
                                    <p><strong>Awards:</strong> {movie.Awards}</p>
                                    <p><strong>Country:</strong> {movie.Country}</p>
                                    <p><strong>Language:</strong> {movie.Language}</p>
                                    <p><strong>Runtime:</strong> {movie.Runtime}</p>
                                    <p><strong>Rated:</strong> {movie.Rated}</p>
                                    <p><strong>Metascore:</strong> {movie.Metascore}</p>
                                    <p><strong>IMDB Rating:</strong> {movie.imdbRating} ({movie.imdbVotes} votes)</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    
                    <Col md={4}>
                        <div className="d-flex flex-column align-items-center">
                            {movie.Images && movie.Images.map((img, index) => (
                                <img key={index} src={img} alt={`Movie Image ${index + 1}`} className="img-fluid mb-3 p-1" style={{ width: '100%',height:'180px',borderRadius:'8px'}} />
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MovieDetails;

