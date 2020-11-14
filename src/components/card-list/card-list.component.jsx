// export const CardList = (props) => {
//   console.log("props are ", props)
//   return (
//     <>
//     <div>hello</div>
//     <div>{props.name}</div>
//     <div>{props.children}</div>
//     </>
//   );
// }



function CardList (props) {
  return (
    <>
     <div>hello</div>
     <div>{props.name}</div>
     <div>{props.children}</div>
     </>
  )
}

export default CardList;