import React from 'react';
import { Container, Row, Col } from "react-bootstrap"; // Importing Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import Image from 'react-bootstrap/Image'; // Importing Image component from Bootstrap
import image1 from '../src/assets/image1.jpeg'; // Importing an image from assets

const App = () => {
  return (
    // <Container className='border border-1'> {/* Main container with a border */}

    //   {/* Headings */}
    //   <h1>Hello</h1> {/* Standard heading */}
    //   <h3>Hello</h3> {/* Smaller heading */}
    //   <p>Hello</p> {/* Paragraph text */}

    //   {/* Headings styled as paragraphs */}
    //   <p className='h1'>Hello</p> {/* Paragraph styled as h1 */}
    //   <p className='h2'>Hello</p> {/* Paragraph styled as h2 */}

    //   {/* Display Headings */}
    //   <h1 className="display-1">Hello</h1> {/* Largest display heading */}
    //   <h1 className="display-3">Hello</h1> {/* Medium display heading */}
    //   <h1 className="display-5">Hello</h1> {/* Smallest display heading */}

    //   {/* Lead and muted text */}
    //   <p className='lead text-muted'>Lorem, <s>ipsum</s> dolor sit amet consectetur adipisicing elit. Ad, tempora.</p> {/* Lead text with muted color and strikethrough */}
    //   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, delectus!</p> {/* Regular paragraph */}

    //   {/* Text alignment */}
    //   <p className='display-1 text-center'>Hello World!</p> {/* Center-aligned text */}
    //   <p className='display-1 text-start'>Hello World!</p> {/* Left-aligned text */}
    //   <p className='display-1 text-end'>Hello World!</p> {/* Right-aligned text */}

    //   {/* Text transform */}
    //   <p className='display-1 text-uppercase'>Hello React!</p> {/* Uppercase text */}
    //   <p className='display-1 text-lowercase'>Hello React!</p> {/* Lowercase text */}
    //   <p className='display-1 text-capitalize'>Hello React!</p> {/* Capitalized text */}

    //   {/* Font size */}
    //   <p className='fs-1'>Font Size 1</p> {/* Largest font size */}
    //   <p className='fs-2'>Font Size 2</p> {/* Second largest font size */}
    //   <p className='fs-3'>Font Size 3</p> {/* Medium font size */}
    //   <p className='fs-4'>Font Size 4</p> {/* Smaller font size */}
    //   <p className='fs-5'>Font Size 5</p> {/* Smaller font size */}
    //   <p className='fs-6'>Font Size 6</p> {/* Smallest font size */}

    //   {/* Font weight and styles */}
    //   <p className='display-1 fw-bold'>Hello Bootstrap</p> {/* Bold font */}
    //   <p className='display-1 fw-bolder'>Hello Bootstrap</p> {/* Bolder font */}
    //   <p className='display-1 fw-light'>Hello Bootstrap</p> {/* Light font */}
    //   <p className='display-1 fw-medium'>Hello Bootstrap</p> {/* Medium font */}

    //   {/* Text decoration */}
    //   <p className="text-decoration-underline">This text has a line underneath it.</p> {/* Underlined text */}
    //   <p className="text-decoration-line-through">This text has a line going through it.</p> {/* Strikethrough text */}
    //   {/* <a href="#" class="text-decoration-none">This link has its text decoration removed</a> */} {/* Link with no text decoration (commented out) */}

    //   {/* Image */}
    //   <Image 
    //     src={image1} 
    //     fluid={true} 
    //     rounded={true} 
    //     thumbnail={true} 
    //     className='w-100 object-fit-cover' 
    //     alt='image' 
    //   /> {/* Responsive image with rounded corners, thumbnail styling, and full width */}

    // </Container>
    // <Container>
    //     {/* Theme colors and colors usage */}
    //     <p className=' display-1 fw-bold text-bg-primary text-black'>Hello World!</p>
    //     {/* Light , grey and muted */}
    //     <p className=' display-1 fw-bold text-muted text-bg-warning'>Hello World!</p>

    //     {/* Opacity */}
    //     <p className=' display-1 fw-bold opacity-50 text-primary'>Opacity</p>

    //     {/* Box model */}
    //     <p className=' display-1 fw-bold p-5 text-info text-bg-dark'>Padding</p> {/* padding from 1 to 5 */}

    //     {/* Padding  t-top, b-bottom, s-start, e-end*/}
    //     <p className=' display-1 fw-bold p-5 m-5 text-center text-info text-bg-dark'>Padding</p> {/* padding from 1 to 5 */}

    // {/* Borders */}
    // <p className="border border-danger border-bottom-4 display-1 fw-bold text-bg-info text-light rounded-pill text-center">Hello React</p>


    // </Container>
    // <Container>
    //   {/* display hide and show menu*/}
    //   <p className='d-inline text-bg-dark display-1 fw-bold'>Hello</p>

    //   {/* flex */}
    //   <div className="d-flex flex-column align-items-end">
    //     <p className="m-2 p-2 text-bg-dark display-1 fw-bolder align-self-center">Flex1</p>
    //     <p className="m-2 p-2 text-bg-dark display-1  fw-bolder">Flex2</p>
    //     <p className="m-2 p-2 text-bg-dark display-1 fw-bolder align-self-start">Flex3</p>

    //   </div>

    // {/* Stack */}
    // <div className="vstack gap-1 align-items-center">
    //   <p className="m-3 p-3 text-bg-secondary w-50">vstack</p>
    //   <p className="m-3 p-3 text-bg-secondary w-50">vstack</p>
    //   <p className="m-3 p-3 text-bg-secondary w-50">vstack</p>

    // </div>

    // {/* h stack */}
    // <div className="hstack gap-1 justify-content-start">
    //   <p className="m-3 p-3 text-bg-secondary w-50">vstack</p>
    //   <p className="m-3 p-3 text-bg-secondary w-50">vstack</p>
    //   <p className="m-3 p-3 text-bg-secondary w-50">vstack</p>

    // </div>

    // </Container>
    <>
      {/* <Container fluid className=' bg-dark'>
        <h1 className="text-bg-dark fs-1 fw-bold">Hello</h1>
      </Container>

      <Container className="border border-primary my-3">
        <Row>
          <Col md={6} lg={12} className="bg-light text-center p-3">Column 1</Col>
          <Col md={6} lg={12} className="bg-secondary text-center text-white p-3">Column 2</Col>
          <Col md={6} lg={12} className="bg-light text-center p-3">Column 3</Col>
        </Row>
      </Container>
      <Container fluid className="bg-info text-white p-5">
        <Row>
          <Col className="text-center">Fluid Container with Full Width</Col>
        </Row>
      </Container> */}

      {/* Grid Systems */}
      <Container>
        <Row>
          <Col className="bg-primary text-white text-center p-3">Column 1</Col>
          <Col className="bg-secondary text-white text-center p-3">Column 2</Col>
          <Col className="bg-success text-white text-center p-3">Column 3</Col>
        </Row>

        <Row className="mt-3">
          <Col md={4} className="bg-danger text-white text-center p-3">Column 1 (md=4)</Col>
          <Col md={4} className="bg-warning text-dark text-center p-3">Column 2 (md=4)</Col>
          <Col md={4} className="bg-info text-white text-center p-3">Column 3 (md=4)</Col>
        </Row>

        <Row className="mt-3">
          <Col sm={6} md={3} className="bg-dark text-white text-center p-3">Column 1 (sm=6, md=3)</Col>
          <Col sm={6} md={3} className="bg-light text-dark text-center p-3">Column 2 (sm=6, md=3)</Col>
          <Col sm={6} md={3} className="bg-primary text-white text-center p-3">Column 3 (sm=6, md=3)</Col>
          <Col sm={6} md={3} className="bg-secondary text-white text-center p-3">Column 4 (sm=6, md=3)</Col>
        </Row>

        <Row className="mt-3">
          <Col xs={12} md={8} className="bg-success text-white text-center p-3">Column 1 (xs=12, md=8)</Col>
          <Col xs={6} md={4} className="bg-danger text-white text-center p-3">Column 2 (xs=6, md=4)</Col>
        </Row>

        <Row className="mt-3">
          <Col xs={{ span: 6, offset: 0 }} className="bg-warning text-dark text-center p-3">
            Offset Column (xs=6, offset=3)
          </Col>
        </Row>
      </Container>

    </>



  )
}

export default App;
