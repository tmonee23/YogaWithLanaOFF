import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Homepage from "./Components/Homepage"
import Header from "./Components/Header"
import Benefits from "./Components/Benefits"
import About from "./Components/About"
import Testimonials from "./Components/Testimonials"
import Reiki from "./Components/Reiki"
import Meditation from "./Components/Meditation"
import Gallery from "./Components/Gallery"
import Coaching from "./Components/Coaching"
import Lila from "./Components/Lila"

import ReikiWorkshop from "./Components/Reikiworkshops"

import AntiGravityYoga from "./Components/GalleryTabs/AntiGravityYoga"
import InternationalYoga from "./Components/GalleryTabs/InternationalYogaDay"
import PartnerYoga from "./Components/GalleryTabs/PartnerYoga"
import YogaClassesBelgrade from "./Components/GalleryTabs/YogaClassesBelgrade"
import YogaClassesJakarta from "./Components/GalleryTabs/YogaClassesJakarta"
import YogaClassesTwoEleven from "./Components/GalleryTabs/YogaClassesTwoEleven"
import YogaRetreat from "./Components/GalleryTabs/YogaRetreats"
import YogaStops from "./Components/GalleryTabs/YogaStopsTrafficking"
import YogaStudio from "./Components/GalleryTabs/YogaStudio"
import YogaTeachersFriends from "./Components/GalleryTabs/YogaTeachersFriends"
import KidsYoga from './Components/GalleryTabs/KidsYoga';
import Reikiworkshops from './Components/Reikiworkshops';
import Nutrition from './Components/NutritionComponents/Nutrition';

import NutritionAlmond from "./Components/NutritionComponents/NutritionAlmond"
import NutritionBites from "./Components/NutritionComponents/NutritionBites"
import NutritionCheesecake from "./Components/NutritionComponents/NutritionCheesecake"
import NutritionCrackers from "./Components/NutritionComponents/NutritionCrackers"
import NutritionCurry from "./Components/NutritionComponents/NutritionCurry"
import NutritionGado from "./Components/NutritionComponents/NutritionGado"
import NutritionGuac from "./Components/NutritionComponents/NutritionGuac"
import NutritionLentils from "./Components/NutritionComponents/NutritionLentils"
import NutritionRice from "./Components/NutritionComponents/NutritionRice"
import NutritionSoup from "./Components/NutritionComponents/NutritionSoup"
import NutritionSpringrolls from "./Components/NutritionComponents/NutritionSpringrolls"


export default function App() {

  return (
    <Router>
      <div className="app-container">
        <Header/>
        <Switch>
          <Route path="/About Me">
            <About/>
          </Route>
          <Route path="/benefits">
            <Benefits/>
          </Route>
          <Route path="/testimonials">
            <Testimonials/>
          </Route>
          <Route path="/coaching">
            <Coaching/>
          </Route>
          <Route path="/leela-game">
            <Lila/>
          </Route>
          <Route path="/reiki">
            <Reiki/>
          </Route>
          <Route path="/meditation">
            <Meditation/>
          </Route>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/gallery-anti-gravity-yoga">
            <AntiGravityYoga/>
          </Route>
          <Route path="/gallery-international-yoga-day">
            <InternationalYoga/>
          </Route>
          <Route path="/gallery-kids-yoga">
            <KidsYoga/>
          </Route>
          <Route path="/gallery-partner-yoga">
            <PartnerYoga/>
          </Route>
          <Route path="/gallery-yoga-classes-belgrade">
            <YogaClassesBelgrade/>
          </Route>
          <Route path="/gallery-yoga-classes-jakarta">
            <YogaClassesJakarta/>
          </Route>
          <Route path="/gallery-yoga-classes-2011">
            <YogaClassesTwoEleven/>
          </Route>
          <Route path="/gallery-yoga-retreats">
            <YogaRetreat/>
          </Route>
          <Route path="/gallery-yoga-stops-trafficking">
            <YogaStops/>
          </Route>
          <Route path="/gallery-yoga-studio">
            <YogaStudio/>
          </Route>
          <Route path="/gallery-yoga-teachers-friends">
            <YogaTeachersFriends/>
          </Route>
          <Route path="/reiki-workshops">
            <Reikiworkshops/>
          </Route>
          <Route path="/nutrition">
            <Nutrition/>
          </Route>
          <Route path="/nutrition-almond">
            <NutritionAlmond/>
          </Route>
          <Route path="/nutrition-bites">
            <NutritionBites/>
          </Route>          
          <Route path="/nutrition-cheesecake">
            <NutritionCheesecake/>
          </Route>
          <Route path="/nutrition-crackers">
            <NutritionCrackers/>
          </Route>
          <Route path="/nutrition-curry">
            <NutritionCurry/>
          </Route>
          <Route path="/nutrition-gado">
            <NutritionGado/>
          </Route>
          <Route path="/nutrition-guac">
            <NutritionGuac/>
          </Route>
          <Route path="/nutrition-lentils">
            <NutritionLentils/>
          </Route>
          <Route path="/nutrition-rice">
            <NutritionRice/>
          </Route>
          <Route path="/nutrition-soup">
            <NutritionSoup/>
          </Route>
          <Route path="/nutrition-springrolls">
            <NutritionSpringrolls/>
          </Route>
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
