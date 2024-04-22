import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, author, details, image_url } = news;
    return (
        <Card className=" mb-2">
            <Card.Header className='d-flex gap-2 align-items-center'>
                <Image style={{ height: '40px' }} src={author.img} roundedCircle />
                <div className='flex-grow-1'>
                    <div>{author.name}</div>
                    <div>{moment(author.published_date).format('YYYY-MM-DD')}</div>
                </div>
                <div>
                    <FaRegBookmark/> <FaShareAlt/>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant='top' src={image_url} />
                <Card.Text>
                    {details < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>See more</Link></>
                    }</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCard;