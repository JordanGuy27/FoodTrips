// import React from 'react';
// import DOM from "react-dom";
// import axios from "axios";

// const googleURL = "https://maps.googleapis.com/maps/api/geocode/json?";

<<<<<<< HEAD
// class AxiosReq extends React.Component {
//   constructor() {
//     super();
//     // this.zomatoSearch = this.zomatoSearch.bind(this);
//     // this.getCoords = this.getCoords.bind(this);
//     this.state = {
//       restaurants: [],
//       city: "",
//       restaurant: ""
//     };
//   }
//   // getCoords(address) {
//   //   axios
//   //     .get(`${googleURL}`, {
//   //       params: {
//   //         key: "AIzaSyDNBpAAUuUkRyioDLQUQW_DZYIb1PiY85Q",
//   //         address: address
//   //       }
//   //     })
//   //     .then(({ data }) => {
//   //       this.setState({
//   //         lat: data.results[0].geometry.location.lat,
//   //         lon: data.results[0].geometry.location.lng
//   //       });
//   //       console.log(data);
//   //     });
//   // }
//   zomatoSearch() {
//     axios
//       .get(`https://developers.zomato.com/api/v2.1/search`, {
//         headers: {
//           "user-key": `53314a8415a07eafa4656461b1c6272d`
//         },
//         params: {
//           // q: 'toronto'      

//           lat: "",
//           lon: "",
//           radius: '500',

//           sort: 'real_distance'
//         }
//       })
//       .then(({ data }) => {
//         // const restRes = data.restaurants[4].restaurant.name;
//         // // console.log(restRes);
//         // const restAdd = data.restaurants[4].restaurant.location.address;
=======
class AxiosReq extends React.Component {
  constructor() {
    super();
    this.zomatoSearch = this.zomatoSearch.bind(this);
    this.getCoords = this.getCoords.bind(this);
    this.state = {
      restaurants: [],
      city: "",
      restaurant: ""
    };
  }
  getCoords(address) {
    axios
      .get(`${googleURL}`, {
        params: {
          key: "AIzaSyDNBpAAUuUkRyioDLQUQW_DZYIb1PiY85Q",
          address: address
        }
      })
      .then(({ data }) => {
        return this.setState({
          lat: data.results[0].geometry.location.lat,
          lon: data.results[0].geometry.location.lng
        });
        
      });
  }
  zomatoSearch(lat, lon) {
    axios
      .get(`https://developers.zomato.com/api/v2.1/search`, {
        headers: {
          "user-key": `53314a8415a07eafa4656461b1c6272d`
        },
        params: {
          // q: 'toronto'      

          'lat': lat,
          'lon': lon,
          radius: '500',

          sort: 'real_distance'
        }
      })
      .then(({ data }) => {
        console.log(data);
        // const restRes = data.restaurants[4].restaurant.name;
        // // console.log(restRes);
        // const restAdd = data.restaurants[4].restaurant.location.address;
>>>>>>> 1e98352d87a2c35c0aab4e3712d113c0f3f03d5f

//         // const newList = {

//         // };

//         const newArray = Array.from(this.state.restaurants);

//         data.restaurants.forEach(eatingPlace => {
//           // console.log(eatingPlace.restaurant.name);
//           // console.log(eatingPlace.restaurant.location.address);

//           const restObj = { name: eatingPlace.restaurant.name, address: eatingPlace.restaurant.location.address };
//           newArray.push(restObj);
//         });

//         console.log(newArray);

<<<<<<< HEAD
//         this.setState({ restaurants: newArray });
//       });
//   }
  // componentDidMount() {
  //   this.getCoords();
  //   this.zomatoSearch();
  // }
=======
        this.setState({ restaurants: newArray });
      });
  }
  componentDidMount() {
    this.getCoords("438 Queen St W");
    this.zomatoSearch(this.state.lat, this.state.lon);
  }
>>>>>>> 1e98352d87a2c35c0aab4e3712d113c0f3f03d5f

//   render() {
//     return (

//       <div>

//             <h1>{this.state.restaurant}</h1>
//             <p>{this.state.city}</p>

//       </div>
//     );
//   }
// }
// export default AxiosReq;