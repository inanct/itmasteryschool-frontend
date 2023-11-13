import React from 'react'
import { Card, CardBody, CardImg, CardTitle } from 'react-bootstrap';
import "./instructor-card.scss";

const InstructorCard = ({firtsName, lastName, title, image}) => {
  return (
    <Card  className="instructor-card">
      <CardBody>
        <div className='image'>
          <CardImg
           variant="top"
          src={`/images/instructors/${image}`}
          alt={title}
          className="img-fluid"
          />
        
        </div>
        <CardTitle>
          <h4>
          {firtsName} {lastName}
        </h4>
        <h6>{title}</h6>
        </CardTitle>
        
      </CardBody>
    </Card>
  )
}

export default InstructorCard