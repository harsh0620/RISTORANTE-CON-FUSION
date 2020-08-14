import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderComments({ comments }) {
  let results = comments.map((comment) => {
    return (
      <li key={comment.id} className="mb-2">
        <h6>{comment.comment}</h6>
        <p>
          -- {comment.author},{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(comment.date)))}
        </p>
      </li>
    );
  });
  return results;
}

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>
                <h5>{dish.name}</h5>
              </CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            <RenderComments comments={dish.comments} />
          </ul>
        </div>
      </div>
    );
  else return <div></div>;
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <RenderDish dish={props.dish} />
    </div>
  );
};

export default DishDetail;
