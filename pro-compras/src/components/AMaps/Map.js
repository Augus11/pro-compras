import React, { Component } from "react";
import {View, Image} from "react-native";
import MapView from "react-native-maps";
import Toast from "react-native-root-toast";
import Geocoder from "react-native-geocoder";

const latitudeDelta = 0.025
const longitudeDelta = 0.025
const API_KEY = "AIzaSyC4yqQnevW_qE2OZwsiW98x-i90FwUznfY"

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state ={
            initialRegion: {
                latitudeDelta,
                longitudeDelta: 0.0122,
                latitude: -34.3473498,
                longitude: -58.7277074,
            },
            locationChosen: false,
            marginBottom :1,
            currentAddress : ''
        }
    }

    componentDidMount() {
        this.handleUserLocation();
        setTimeout(() => this.setState({marginBottom: 0}),100)
    }

    handleUserLocation() {

        
        navigator.geolocation.getCurrentPosition(pos => {
            //alert(JSON.stringify(pos))
            this.map.animateToRegion({
                ...this.state.initialRegion,
                latitude : pos.coords.latitude,
                longitude : pos.coords.longitude,
            })

            this.setState({
                initialRegion: {
                    ...this.state.initialRegion,
                    latitude : pos.coords.latitude,
                    longitude : pos.coords.longitude,
                },
                locationChosen: true
            })
            this.getAdress(pos.coords.latitude, pos.coords.longitude)
            },
            err => {
                console.log(err);
                alert("sudi wrong")
            })

        }

    getAdress = async(lat, lng) => {

        var NY = {
            lat: 40.7809261,
            lng: -73.9637594
          };

        await Geocoder.fallbackToGoogle(API_KEY);
        try{
            const res = await Geocoder.geocodePosition(NY)
            let addr = (res[0].formattedAdress)
            this.setState({
                currentAddress : addr
        })
        } catch(err){alert(err)}
    }

    OnChangeValue = initialRegion => {
        Toast.show(JSON.stringify(this.state.currentAddress))
        this.setState ({
            initialRegion
        })
    }
    
    render () {
        return (
            <View style={{flex:1}}>
                <MapView 
                style={{flex:1, marginBottom : this.state.marginBottom}}
                showsUserLocation = {true}
                showsMyLocationButton = {true}
                initialRegion = {this.state.initialRegion}
                onRegionChangeComplete = {this.OnChangeValue}
                ref = {ref => this.map = ref}
                />
                
                <View style={{top:"50%", left:"50%", marginLeft:-24, marginTop:-48, position:"absolute"}}>
                    <Image style={{height:48,width:48}} source={require("../../../assets/pin.png")} />
                </View>

            </View>
        )
    }   
}