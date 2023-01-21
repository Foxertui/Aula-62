import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class WeatherScreen extends Component {
  constructor() {
    super();
    this.state = {
      weather: '',
    };
  }
  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          weather: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    if (this.state.weather === '') {
      return (
        <View>
          <Text> Carregando </Text>{' '}
        </View>
      );
    } else {
      return (
        <View style={{flex:1,backgroundColor:"lightblue"}}>

          <Text style={{alignSelf:"center",fontSize:25,fontWeight:"bold"}}>Previsão do tempo</Text>
          <View>
            <Text style={{alignSelf:"center",fontSize:20,marginTop:20}}>Temperatura: {this.state.weather.main.temp}º, </Text>{' '}
            <Text style={{alignSelf:"center",fontSize:20}}>Umidade: {this.state.weather.main.humidity} </Text>
            <Text style={{alignSelf:"center",fontSize:20}}>Clima: {this.state.weather.weather[0].description} </Text>
          </View>
          
        </View>

      );
    }
  }
}
