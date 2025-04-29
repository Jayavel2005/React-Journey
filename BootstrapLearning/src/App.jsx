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
    <Container>
        {/* Theme colors and colors usage */}
        <p className=' display-1 fw-bold text-bg-primary text-black'>Hello World!</p>
        {/* Light , grey and muted */}
        <p className=' display-1 fw-bold text-muted text-bg-warning'>Hello World!</p>

        {/* Opacity */}
        <p className=' display-1 fw-bold opacity-50 text-primary'>Opacity</p>

        {/* Box model */}
        <p className=' display-1 fw-bold p-5 text-info text-bg-dark'>Padding</p> {/* padding from 1 to 5 */}

        {/* Padding  t-top, b-bottom, s-start, e-end*/}
        <p className=' display-1 fw-bold p-5 m-5 text-center text-info text-bg-dark'>Padding</p> {/* padding from 1 to 5 */}

    {/* Borders */}
    <p className="border border-danger border-bottom-4 display-1 fw-bold text-bg-info text-light rounded-pill text-center">Hello React</p>


    </Container>


  )
}

export default App;
