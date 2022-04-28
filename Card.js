import classes from "./Card.module.css";

export default function Card(props) {
  let description = "";
  if(props.description) description = props.description.split(" ");

  let cutDescription = "";
  if (description.length > 10) {
    for (let i = 0; i < 10; ++i) cutDescription += description[i] + " ";
    cutDescription += "...";
  }

  return (
    <div className={`card ${classes.card}`}>
      <img src={props.imageUrl} className="card-img-top" alt={props.title} />
      <div className={`card-body ${classes.cardBody}`}>
        <div>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{cutDescription}</p>
        </div>
        <a href={props.originUrl} target="_blank" className="btn btn-info">
          Read more
        </a>
      </div>
    </div>
  );
}
