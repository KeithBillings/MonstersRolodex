import "./card-list.css";

function CardList({monsters}) {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <h1 key={monster.id}> {monster.name} </h1>;
      })}
    </div>
  );
}

export default CardList;
