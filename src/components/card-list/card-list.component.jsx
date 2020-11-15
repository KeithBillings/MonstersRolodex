import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="card-list" > {props.children} </div>
  );
}



// function CardList (props) {
//   return (
//     <div className="card-list" > {props.children} </div>
//   )
// }

// export default CardList;