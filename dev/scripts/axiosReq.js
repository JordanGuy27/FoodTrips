import React from 'react';
import DOM from "react-dom";
import axios from "axios";

const googleURL = "https://maps.googleapis.com/maps/api/geocode/json?";

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
        this.setState({
          lat: data.results[0].geometry.location.lat,
          lon: data.results[0].geometry.location.lng
        });
        console.log(data);
      });
  }
  zomatoSearch() {
    axios
      .get(`https://developers.zomato.com/api/v2.1/search`, {
        headers: {
          "user-key": `53314a8415a07eafa4656461b1c6272d`
        },
        params: {
          // q: 'toronto'
          lat: "43.653257",
          lon: "-79.466695"
        }
      })
      .then(({ data }) => {
        // const restRes = data.restaurants[4].restaurant.name;
        // // console.log(restRes);
        // const restAdd = data.restaurants[4].restaurant.location.address;

        // const newList = {

        // };

        const newArray = Array.from(this.state.restaurants);

        data.restaurants.forEach(eatingPlace => {
          // console.log(eatingPlace.restaurant.name);
          // console.log(eatingPlace.restaurant.location.address);

          const restObj = { name: eatingPlace.restaurant.name, address: eatingPlace.restaurant.location.address };
          newArray.push(restObj);
        });

        console.log(newArray);

        this.setState({ restaurants: newArray });
      });
  }
  componentDidMount() {
    this.getCoords("438 Queen St W");
    this.zomatoSearch();
  }

  render() {
    return (

      <div>

            <h1>{this.state.restaurant}</h1>
            <p>{this.state.city}</p>

      </div>
    );
  }
}
export default AxiosReq;