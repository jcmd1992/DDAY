<template>
  <!-- this displays the map when the map tab is clicked on -->
      <div class="App"/>
</template>

<script>

import MarkerClusterer from '@google/markerclusterer'
import gmapsInit from '../utils/gmaps'
// this sets all the pins on the map when it initializes -->
const Omaha = [
  {
    position: {
      lat: 49.3715,
      lng: -0.8885
    }
  }]
const Gold = [
  {
    position: {
      lat: 49.340498638,
      lng: -0.569664
    }
  }]
const Sword = [
  {
    position: {
      lat: 49.3038,
      lng: -0.3193
    }
  }]
const Juno = [
  {
    position: {
      lat: 49.3345,
      lng: -0.4092
    }
  }]
const Utah = [
  {
    position: {
      lat: 49.4175,
      lng: -1.1725
    }
  }
]
const Cliffs = [
  {
    position: {
      lat: 49.3908,
      lng: -0.9867
    }
  }
]
const Calais = [
  {
    position: {
      lat: 50.9513,
      lng: 1.8587
    }
  }
]
const American = [
  {
    position: {
      lat: 49.499998,
      lng: -1.5276
    }
  }]
const British = [
  {
    position: {
      lat: 49.18585,
      lng: -0.45801
    }
  }
]

const Carentan = [
  {
    position: {
      lat: 49.30312,
      lng: -1.24806
    }
  }]
const Isigny = [
  {
    position: {
      lat: 49.11624,
      lng: -1.09031
    }
  }]
const Caen = [
  {
    position: {
      lat: 49.18585,
      lng: -0.35912
    }
  }]
const Bayeux = [
  {
    position: {
      lat: 49.27732,
      lng: -0.7039
    }
  }
]
const Fortitude = [
  {
    position: {
      lat: 51.13333,
      lng: 1.3
    }
  }
]
const Weather = [
  {
    position: {
      lat: 54.098520,
      lng: -10.060472
    }
  }
]
// this runs the map and initializes it
export default {
  name: 'Sorted',
  async mounted () {
    try {
      const google = await gmapsInit()
      const geocoder = new google.maps.Geocoder()
      const map = new google.maps.Map(this.$el)
      geocoder.geocode({address: `France`}, (results, status) => {
        if (status !== `OK` || !results[0]) {
          throw new Error(status)
        }
        map.setCenter(results[0].geometry.location)
        map.fitBounds(results[0].geometry.viewport)
      })
      // this sets the what happens when a pin is clicked on and can set different icons for  pins
      const Markers = Omaha
        .map((omaha) => {
          const Marker = new google.maps.Marker({...omaha, map})
          Marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
          // Marker.addListener(`click`, () => markerClickHandler(Marker))
          Marker.addListener('click', function () {
            map.setZoom(13)
            map.setCenter(Marker.getPosition())
            window.location = '../#/Omaha'
          })
          return Marker
        })
      const Markers2 = Cliffs
        .map((Cliff) => {
          const Marker2 = new google.maps.Marker({...Cliff, map})
          Marker2.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png')
          Marker2.addListener('click', function () {
            map.setZoom(13)
            console.log('bit too much zoom?')
            map.setCenter(Marker2.getPosition())
            console.log('this might work')
            // this.$router.push('/Message')
            window.location = '../#/Cliffs'
          })
          return Marker2
        })
      const Markers3 = Calais
        .map((calais) => {
          const Marker3 = new google.maps.Marker({...calais, map})
          Marker3.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png')
          Marker3.addListener('click', function () {
            map.setZoom(13)
            console.log('bit too much zoom?')
            map.setCenter(Marker3.getPosition())
            console.log('this might work')
            // this.$router.push('/Message')
            window.location = '../#/Calais'
          })
          return Marker3
        })
      const Markers4 = American
        .map((american) => {
          const Marker4 = new google.maps.Marker({...american, map})
          Marker4.setIcon('http://maps.google.com/mapfiles/ms/icons/orange-dot.png')
          Marker4.addListener('click', function () {
            map.setZoom(13)
            console.log('bit too much zoom?')
            map.setCenter(Marker4.getPosition())
            console.log('this might work')
            // this.$router.push('/Message')
            window.location = '../#/American'
          })
          return Marker4
        })
      const Markers5 = Carentan
        .map((carentan) => {
          const Marker5 = new google.maps.Marker({...carentan, map})
          Marker5.setIcon('http://maps.google.com/mapfiles/ms/icons/pink-dot.png')
          Marker5.addListener('click', function () {
            map.setZoom(13)
            console.log('bit too much zoom?')
            map.setCenter(Marker5.getPosition())
            console.log('this might work')
            // this.$router.push('/Message')
            window.location = '../#/Carentan'
          })
          return Marker5
        })
      const Markers6 = Fortitude
        .map((fortitude) => {
          const Marker6 = new google.maps.Marker({...fortitude, map})
          Marker6.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png')
          Marker6.addListener('click', function () {
            map.setZoom(13)
            console.log('bit too much zoom?')
            map.setCenter(Marker6.getPosition())
            console.log('this might work')
            // this.$router.push('/Message')
            window.location = '../#/Fortitude'
          })
          return Marker6
        })
      const Markers7 = Weather
        .map((weather) => {
          const Marker7 = new google.maps.Marker({...weather, map})
          Marker7.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png')
          Marker7.addListener('click', function () {
            map.setZoom(13)
            console.log('bit too much zoom?')
            map.setCenter(Marker7.getPosition())
            console.log('this might work')
            // this.$router.push('/Message')
            window.location = '../#/Weather'
          })
          return Marker7
        })
      const Markers8 = Utah
        .map((utah) => {
          const Marker8 = new google.maps.Marker({...utah, map})
          Marker8.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
          // Marker.addListener(`click`, () => markerClickHandler(Marker))
          Marker8.addListener('click', function () {
            map.setZoom(13)
            console.log('bit too much zoom?')
            map.setCenter(Marker8.getPosition())
            console.log('this might work')
            // this.$router.push('/Message')
            window.location = '../#/Utah'
          })
          return Marker8
        })
      const Markers9 = Gold
        .map((gold) => {
          const Marker9 = new google.maps.Marker({...gold, map})
          Marker9.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
          // Marker.addListener(`click`, () => markerClickHandler(Marker))
          Marker9.addListener('click', function () {
            map.setZoom(13)
            console.log('bit too much zoom?')
            map.setCenter(Marker9.getPosition())
            console.log('this might work')
            // this.$router.push('/Message')
            window.location = '../#/Gold'
          })
          return Marker9
        })
      const Markers10 = Sword
        .map((sword) => {
          const Marker10 = new google.maps.Marker({...sword, map})
          Marker10.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
          // Marker.addListener(`click`, () => markerClickHandler(Marker))
          Marker10.addListener('click', function () {
            map.setZoom(13)
            console.log('bit too much zoom?')
            map.setCenter(Marker10.getPosition())
            console.log('this might work')
            // this.$router.push('/Message')
            window.location = '../#/Sword'
          })
          return Marker10
        })
      const Markers11 = Juno
        .map((juno) => {
          const Marker11 = new google.maps.Marker({...juno, map})
          Marker11.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
          // Marker.addListener(`click`, () => markerClickHandler(Marker))
          Marker11.addListener('click', function () {
            map.setZoom(13)
            console.log('bit too much zoom?')
            map.setCenter(Marker11.getPosition())
            console.log('this might work')
            // this.$router.push('/Message')
            window.location = '../#/Juno'
          })
          return Marker11
        })
      const Markers12 = British
        .map((british) => {
          const Marker12 = new google.maps.Marker({...british, map})
          Marker12.setIcon('http://maps.google.com/mapfiles/ms/icons/orange-dot.png')
          // Marker.addListener(`click`, () => markerClickHandler(Marker))
          Marker12.addListener('click', function () {
            map.setZoom(13)
            console.log('bit too much zoom?')
            map.setCenter(Marker12.getPosition())
            console.log('this might work')
            // this.$router.push('/Message')
            window.location = '../#/British'
          })
          return Marker12
        })
      const Markers13 = Caen
        .map((caen) => {
          const Marker13 = new google.maps.Marker({...caen, map})
          Marker13.setIcon('http://maps.google.com/mapfiles/ms/icons/pink-dot.png')
          // Marker.addListener(`click`, () => markerClickHandler(Marker))
          Marker13.addListener('click', function () {
            map.setZoom(13)
            console.log('bit too much zoom?')
            map.setCenter(Marker13.getPosition())
            console.log('this might work')
            // this.$router.push('/Message')
            window.location = '../#/Caen'
          })
          return Marker13
        })
      const Markers14 = Bayeux
        .map((bayeux) => {
          const Marker14 = new google.maps.Marker({...bayeux, map})
          Marker14.setIcon('http://maps.google.com/mapfiles/ms/icons/pink-dot.png')
          // Marker.addListener(`click`, () => markerClickHandler(Marker))
          Marker14.addListener('click', function () {
            map.setZoom(13)
            console.log('bit too much zoom?')
            map.setCenter(Marker14.getPosition())
            console.log('this might work')
            // this.$router.push('/Message')
            window.location = '../#/Bayeux'
          })
          return Marker14
        })
      const Markers15 = Isigny
        .map((isigny) => {
          const Marker15 = new google.maps.Marker({...isigny, map})
          Marker15.setIcon('http://maps.google.com/mapfiles/ms/icons/pink-dot.png')
          // Marker.addListener(`click`, () => markerClickHandler(Marker))
          Marker15.addListener('click', function () {
            map.setZoom(13)
            map.setCenter(Marker15.getPosition())
            window.location = '../#/Isigny'
          })
          return Marker15
        })
      // eslint-disable-next-line no-new
      new MarkerClusterer(map, Markers, Markers2, Markers3, Markers4, Markers5, Markers6, Markers7, Markers8, Markers9, Markers10, Markers11, Markers12, Markers13, Markers14, Markers15, {
        imagePath: `https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m`
      })

      var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/'
      var icons = {
        parking: {
          name: 'Parking',
          icon: iconBase + 'parking_lot_maps.png'
        },
        library: {
          name: 'Library',
          icon: iconBase + 'library_maps.png'
        },
        info: {
          name: 'Info',
          icon: iconBase + 'info-i_maps.png'
        }
      }

      var legend = document.getElementById('legend')
      for (var key in icons) {
        var type = icons[key]
        var name = type.name
        var icon = type.icon
        var div = document.createElement('div')
        div.innerHTML = '<img src="' + icon + '"> ' + name
        return (legend)
      }

      map.controls.push(legend)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}

</script>
<!-- Styling Code -->
<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }
  .App {
    border-color: #CCCCCC;
    width: 100vw;
    height: 90vh;
  }
</style>
