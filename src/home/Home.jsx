import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../stylemodules/Home.css';

const Home = () => {
  return (
    <div>
     
     {/* <section className="banner" style={{ height: '630px',width:"auto"}}>
        <img
          src={ban}
          alt="Banner"
          className="w-100 bg-dark"
          style={{objectFit: "fill",height:"630px"}}
        /> 
      </section> */}

      
      <section className="section-one py-5 bg-black d-flex align-items-center">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <h1 className="fs-1  text-white">Discover the Best Books and Movies</h1>
              <p className="fs-3  text-white">Books and Movies are not just stories; they are gateways to endless adventures and transformative experiences.</p>
  <Link to="/login-page"><button type="button" className="btn btn-dark border-primary btn-lg mt-3">Discover More</button></Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section-categories py-5 bg-black">
        <p className='fs-1 text-danger'>Type of books:</p>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <Card className=" text-white  shadow-lg bg-dark border border-primary">
                <Card.Body>
                  <Card.Title className="h3">Story Books</Card.Title>
                <p>
                 A book containing a collection of stories (usually for children) type of: book. a written work or composition that has been published (printed on pages bound together)
                </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-4">
              <Card className="text-white  shadow-lg bg-dark border border-primary">
                <Card.Body>
                  <Card.Title className="h3">Science Fiction Books</Card.Title>
                <p>
                In science, though, friction has a very specific meaning. Friction is the force felt between two surfaces when one attempts to slide against the other — whether or not they are moving.
                </p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-4">
              <Card className="text-white  shadow-lg bg-dark border border-primary">
                <Card.Body>
                  <Card.Title className="h3">Social Books</Card.Title>
                 <p>
                 Social Book, created by the Institute for the Future of the Book, is a social reading platform that allows reader to add their own commentary to texts, share these ideas with others, follow others' comments.
                 </p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Books and Movies Section */}
      <section className="section-books-movies py-5 bg-black text-white">
        <p className='fs-1 text-danger'>See Category</p>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <Card className="text-white  shadow-lg bg-dark">
                <Card.Body>
                  <Card.Title className="display-4">Books</Card.Title>
                  <Card.Text className="lead">Discover Our Latest Book Collection</Card.Text>
          <Link to="/book-info"><button type="button" className="btn bg-dark text-white border-danger btn-lg">Browse Books</button></Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 mb-4">
              <Card className="text-white  shadow-lg bg-dark">
                <Card.Body>
                  <Card.Title className="display-4">Movies</Card.Title>
                  <Card.Text className="lead">Check Out New Releases and Classics</Card.Text>
     <Link to="/login-page"><button type="button" className="btn bg-dark text-white border-danger btn-lg">Browse Movies</button></Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="section-featured-books-movies py-5 bg-black text-white">
        <p className='fs-1 text-danger'>Remarkable Book and Movie:</p>
  <div className="container">
    <div className="row">

      <div className="col-md-6 mb-4">
        <div className="p-4 shadow-lg bg-dark">
          <h5 className="text-uppercase text-info">Pother Dabi(Book)</h5>
          <p className="text-white">
            "Pother Dabi" is a renowned novel that captures the socio-political landscape of Bengal during the British colonial period. It explores themes of revolution, love, and sacrifice, painting a vivid picture of the era.
          </p>
          <p className="text-white"><strong>Author:</strong> Sarat Chandra Chattopadhyay</p>
          <p className="text-white"><strong>Genre:</strong> Historical, Drama</p>
          <p className="text-white"><strong>Price:</strong> $10</p>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="p-4 shadow-lg bg-dark text-white">
          <h5 className="text-uppercase text-info">300(movie)</h5>
          <p className="text-white">
            "300" is an epic war film that chronicles the Battle of Thermopylae, where King Leonidas of Sparta and his 300 warriors fought valiantly against the massive Persian army. Known for its stunning visuals and intense action scenes.
          </p>
          <p className="text-white"><strong>Director:</strong> Zack Snyder</p>
          <p className="text-white"><strong>Genre:</strong> Action, War</p>
          <p className="text-white"><strong>Price:</strong> $15</p>
          
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Featured Movies Section */}
      <section className="section-featured-movies py-5 bg-black text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h1 className="display-4">Featured Movies</h1>
              <p className="lead">Catch the latest and greatest movies now available.</p>
              <div className="mt-4">
                <h3>Epic Movie of the Year</h3>
                <p>Experience a cinematic journey like never before.</p>
              </div>
              <div className="mt-4">
                <h3>Classic Film Re-releases</h3>
                <p>Revisit the timeless classics that defined an era.</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
            <h1 className="display-4">Featured Books</h1>
              <p className="lead">Catch the latest and greatest books now available.</p>
              <div className="mt-4">
                <h3>Don Quixote</h3>
                <p>obsession with chivalric tales distorts reality, leading the protagonist to revive knighthood.</p>
              </div>
              <div className="mt-4">
                <h3>Classic Film Re-publishing</h3>
                <p>Revisit the pld cult-classic book of our era</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-testimonials py-5 bg-black text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h1 className="display-4">Kind Words From Our Clients</h1>
              <p className="lead">Mauris cursus metus eget malesuada sagittis. Vivamus tincidunt, leo a faucibus pharetra, augue odio mattising ante, sed facilisis mi dui vitae orci.</p>
              <div className="mt-4">
                <h4>John Doe</h4>
                <h5>Customer</h5>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <Card className="text-center border-0 bg-dark shadow-lg text-white mb-3">
                <Card.Body>
                  <p className="font-weight-bold">FREE SHIPPING</p>
                  <h6>All Orders Over $100</h6>
                </Card.Body>
              </Card>
              <Card className="text-center border-0 bg-dark shadow-lg text-white mb-3">
                <Card.Body>
                  <p className="font-weight-bold">SECURE PAYMENTS</p>
                  <h6>Confidence on All Devices</h6>
                </Card.Body>
              </Card>
              <Card className="text-center border-0 bg-dark shadow-lg text-white">
                <Card.Body>
                  <p className="font-weight-bold">MONEY BACK</p>
                  <h6>If the Item Didn’t Suit You</h6>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* News and Tips Section */}
      <section className="section-news-tips py-5 bg-black text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <h4 className="text-danger">News and Tips</h4>
              <h3 className="font-weight-bold">From Our Blog</h3>
              <div className="mt-4">
                <h3>The 10 Best Books to Read This Year</h3>
                <p>Sed imperdiet quam sit amet metus convallis, et elementum velit suscipit. Sed semper lectus nec magna lobortis ornare. Nulla vel commodo metus. Vivamus urna justo, sollicitudin…</p>
              </div>
              <div className="mt-4">
                <h3>Top 5 Movies You Need to Watch</h3>
                <p>Maecenas vitae egestas arcu, id efficitur quam. Morbi elementum fermentum velit, vel ullamcorper est. Mauris efficitur viverra velit sit amet tempor. Nullam sit amet pellentesque mauris.…</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <h3 className='text-danger'>Best Movies:</h3>
              <h6>300</h6>
              <h6>The Dark Knight</h6>
              <h6>Godfather Part2</h6>
              <h6>Angry men</h6>
              <h6>Pother Pnchali</h6>

              <h3 className='text-danger'>Best Books:</h3>
              <h6>Bonolota sen</h6>
              <h6>Pother Dabi</h6>
              <h6>Mahesh</h6>
              <h6>Dutta</h6>
              <h6>Pirates Of Caribian</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
