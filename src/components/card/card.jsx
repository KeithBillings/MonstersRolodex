import "../card/card.css";

function Card({ monster }) {
  return (
    <div className="card-container">
      <img alt="mosnter" src={`https://robohash.org/${monster.id}?set=set2&size=180x250`}/>
      <h1 key={monster.id}> {monster.name} </h1>
    </div>
  );
}

export default Card;
