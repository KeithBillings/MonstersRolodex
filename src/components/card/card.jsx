import "../card/card.css";

function Card({ monster }) {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${monster.id}?set=set2&size=180x250`}
      />
      <h2 key={monster.id}> {monster.name} </h2>
      <p>{monster.email}</p>
    </div>
  );
}

export default Card;
