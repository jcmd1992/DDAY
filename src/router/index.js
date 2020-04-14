import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/Map'
import Message from '@/components/Message'
import Messages from '@/components/Messages'
import Login from '@/components/Login'
import secure from '@/components/secure'
import Register from '@/components/Register'
import Users from '@/components/Users'
import CreateChatMessage from '../components/CreateChatMessage'
import Chat from '../components/Chat'
import Utah from '../components/Utah'
import Gold from '../components/Gold'
import Omaha from '../components/Omaha'
import Juno from '../components/Juno'
import Sword from '../components/Sword'
import Cliffs from '../components/Cliffs'
import Calais from '../components/Calais'
import American from '../components/American'
import Carentan from '../components/Carentan'
import Fortitude from '../components/Fortitude'
import Weather from '../components/Weather'
import British from '../components/British'
import Caen from '../components/Caen'
import Bayeux from '../components/Bayeux'
import Isigny from '../components/Isigny'
import Welcome from '../components/Welcome'
import AboutMe from '../components/AboutMe'
import Legend from '../components/Legend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Map',
      name: 'Map',
      component: Map
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/Messages',
      name: 'Messages',
      component: Messages
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/secure',
      name: 'secure',
      component: secure
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Users',
      name: 'Users',
      component: Users
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat,
      props: true
    },
    {
      path: '/CreateChatMessage',
      name: 'CreateChatMessage',
      component: CreateChatMessage,
      props: true
    },
    {
      path: '/Gold',
      name: 'Gold',
      component: Gold,
      props: true
    },
    {
      path: '/Omaha',
      name: 'Omaha',
      component: Omaha,
      props: true
    },
    {
      path: '/Utah',
      name: 'Utah',
      component: Utah,
      props: true
    },
    {
      path: '/Juno',
      name: 'Juno',
      component: Juno,
      props: true
    },
    {
      path: '/Sword',
      name: 'Sword',
      component: Sword,
      props: true
    },
    {
      path: '/Cliffs',
      name: 'Cliffs',
      component: Cliffs,
      props: true
    },
    {
      path: '/Calais',
      name: 'Calais',
      component: Calais,
      props: true
    },
    {
      path: '/American',
      name: 'American',
      component: American,
      props: true
    },
    {
      path: '/Carentan',
      name: 'Carentan',
      component: Carentan,
      props: true
    },
    {
      path: '/Fortitude',
      name: 'Fortitude',
      component: Fortitude,
      props: true
    },
    {
      path: '/Weather',
      name: 'Weather',
      component: Weather,
      props: true
    },
    {
      path: '/British',
      name: 'British',
      component: British,
      props: true
    },
    {
      path: '/Caen',
      name: 'Caen',
      component: Caen,
      props: true
    },
    {
      path: '/Bayeux',
      name: 'Bayeux',
      component: Bayeux,
      props: true
    },
    {
      path: '/Isigny',
      name: 'Isigny',
      component: Isigny,
      props: true
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome,
      props: true
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe,
      props: true
    },
    {
      path: '/Legend',
      name: 'Legend',
      component: Legend,
      props: true
    }
  ]
})
