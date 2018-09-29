// import React, { Component } from "react";
// import Search from "react-search-box";

// class MySearch extends Component {
//   state = {
//     data: [],
//     loading: false
//   };

//   componentDidMount = () => {
//     this.setState({
//       loading: true
//     });

//     fetch("https://api.nomics.com/v1/dashboard?key=bda8c27c06ed079d1e7ebf5b1ebdfe82&currency=BTC")
//       .then(res => res.json())
//       .then(data => {
//         this.setState({
//           data: data.items,
//           loading: false
//         });
//       });
//   };

//   handleChange = selection => {
//     selection ? console.log(selection.full_name) : console.log("reverted");
//   };

//   render() {
//     return (
//       <Search
//         data={this.state.data}
//         onChange={this.handleChange}
//         placeholder="Search for a string..."
//         class="search-class"
//         searchKey="currency"
//         loading={this.state.loading}
//         width={300}
//         height={40}
//       />
//     );
//   }
// }

// export default MySearch;