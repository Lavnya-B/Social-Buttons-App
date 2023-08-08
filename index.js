const Button = (props) => {
  const { className, text } = props;

  return <button className={`button ${className}`}>{text}</button>;
};

const element = (
  <div className="social-buttons-container">
    <div className="card-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button className="like-btn" text="Like" />
        <Button className="comment-btn" text="Comment" />
        <Button className="share-btn" text="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
