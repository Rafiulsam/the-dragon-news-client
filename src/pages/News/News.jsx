import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData()
    const { category_id, title, details, image_url } = news
    return (
        <Card>
            <Card.Body>
            <Card.Img variant="top" src={image_url} />
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}> <Button variant="danger"> <FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default News;