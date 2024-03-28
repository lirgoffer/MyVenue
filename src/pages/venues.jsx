import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Venues() {
    // Array of venues data
    const venuesData = [
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1620704043184-bc985bebeb8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "אולם לדוגמא",
            description: "תקציר על האולם",
            location: "תל אביב, ישראל",
            moreDetails: "עוד פרטים",
            link: "#"
        },
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1620704043184-bc985bebeb8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "אולם לדוגמא",
            description: "תקציר על האולם",
            location: "תל אביב, ישראל",
            moreDetails: "עוד פרטים",
            link: "#"
        },
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1620704043184-bc985bebeb8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "אולם לדוגמא",
            description: "תקציר על האולם",
            location: "תל אביב, ישראל",
            moreDetails: "עוד פרטים",
            link: "#"
        },
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1620704043184-bc985bebeb8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "אולם לדוגמא",
            description: "תקציר על האולם",
            location: "תל אביב, ישראל",
            moreDetails: "עוד פרטים",
            link: "#"
        },
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1620704043184-bc985bebeb8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "אולם לדוגמא",
            description: "תקציר על האולם",
            location: "תל אביב, ישראל",
            moreDetails: "עוד פרטים",
            link: "#"
        },
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1620704043184-bc985bebeb8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "אולם לדוגמא",
            description: "תקציר על האולם",
            location: "תל אביב, ישראל",
            moreDetails: "עוד פרטים",
            link: "#"
        },
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1620704043184-bc985bebeb8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "אולם לדוגמא",
            description: "תקציר על האולם",
            location: "תל אביב, ישראל",
            moreDetails: "עוד פרטים",
            link: "#"
        },
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1620704043184-bc985bebeb8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "אולם לדוגמא",
            description: "תקציר על האולם",
            location: "תל אביב, ישראל",
            moreDetails: "עוד פרטים",
            link: "#"
        },
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1620704043184-bc985bebeb8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "אולם לדוגמא",
            description: "תקציר על האולם",
            location: "תל אביב, ישראל",
            moreDetails: "עוד פרטים",
            link: "#"
        },
        {
            id: 1,
            imageUrl: "https://images.unsplash.com/photo-1620704043184-bc985bebeb8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "אולם לדוגמא",
            description: "תקציר על האולם",
            location: "תל אביב, ישראל",
            moreDetails: "עוד פרטים",
            link: "#"
        },
        // Add more venues data as needed
    ];

    return (
        <div className="mt-4 mb-4">
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                {venuesData.map((venue) => (
                    <Col key={venue.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={venue.imageUrl} />
                            <Card.Body>
                                <Card.Title>{venue.title}</Card.Title>
                                <Card.Text>{venue.description}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{venue.location}</ListGroup.Item>
                                <ListGroup.Item>{venue.moreDetails}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href={venue.link}>קישור לעמוד המציג את האולם</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Venues;
