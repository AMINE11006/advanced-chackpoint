import React from 'react';
import './App.css';
import propTypes from 'prop-types'

function ProductTable(props) {
  return (
    <div> 
      <h1>Welcome in our Website</h1>
      <h1>Check our product</h1>
<table 

style={{
  backgroundColor: "green",
  height: "auto",
  width: "850px",
  marginTop:"50px",
}}>

<thead   

style={{
color: 'yellow' ,
backgroundColor: "red",
fontSize: "50px",
}}>

  <tr>
    <th>Name</th>
    <th>Category</th>
    <th>Price</th>
  </tr>
</thead>
{props.tableau.map((e)=> (
<tbody key={e.name} 
  style={{
    color: "white",
    fontSize: "30px",
    textAlign: "center",
  }}>
<tr>
<td>{e.name}</td>
<td>{e.category}</td>
<td>{e.price} €</td>
</tr>
</tbody>
))}

</table>
    </div>
  );
}


ProductTable.propTypes = {
  tableau: propTypes.array
}

export default ProductTable;



