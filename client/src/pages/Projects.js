import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
// import Budgeting2Go from '../assets/Images/fullStackQuiz.PNG';
import Stylewith from '../assets/Images/Style_Weather.PNG';
import Trac2fit from '../assets/Images/trac2fithome.PNG';
import SongNSeek from '../assets/Images/songnseek.PNG';
// import WeatherCentral from '../assets/Images/weatherCentral.PNG';
// import CLIEmployeeTracker from '../assets/Images/CLIEmployeeTracker.PNG';


export function Projects() {
  return (
    <>
      <Header heading="Projects (Click to toggle display)" />
      <ProjectCard
        name="Song N' Seek"
        heading="Song N' Seek"
        src={SongNSeek}
        alt=""
        repo="https://github.com/Joeseff6/SongNSeek"
        link="https://song-n-seek.herokuapp.com/"
        paragraph="Song N' Seek is the perfect example of user interaction on the client-side to communicate with server-side applications.
        Originally meant to be a streaming app like Spotify or Apple Music, this application works as a development project towards something
        as great as the aforementioned. Users will create a new account by submitting information such as a username, email, and encrypted 
        password."
      />
      <ProjectCard
        name="Style with my Weather App"
        heading="Style with my Weather App"
        src={Stylewith}
        alt="Style with my Weather App"
        repo="https://github.com/Desparta05/Style-With-My-Weather-App"
        link="https://desparta05.github.io/Style-With-My-Weather-App/"
        paragraph="The Style with my Weather application allows the user to search by city, and get outfit suggestions based on the current weather.
          (General stats, the current weather or weather forecast, a map of the city, and suggestions on places to go.) Other features include a 
          google map that shows the city you types in and recent history, where data is stored for easy retrieval even upon page refresh. Style with my Weather features Third-party APIs 
          such as Foundation, Google fonts. We also utilized Server-side APIs such as GoogleMaps, OpenWeather, Open Layer in this project."
      />
      <ProjectCard
        name="Trac2Fit"
        heading="Trac2Fit"
        src={Trac2fit}
        alt="The homepage of my Tech Blog App"
        repo="https://github.com/Desparta05/Trac2Fit"
        link="https://trak2fit.herokuapp.com/"
        paragraph="The Trac2Fit application is utilize the NoSQL database MongoDB, along with Mongoose.js as the ODM (Object Document Mapper). 
          Since this application is deployed to heroku, I am also using MongoDB Atlas to manage my database using a connected cluster. As the 
          user interacts with the application, CRUD operations are performed to interact with the database inside the cluster; the information 
          stored in the database are then returned to the user!"
        
      />
      <ProjectCard
        name="Budgeting2Go"
        heading="Budgeting2Go"
        src={FullStackQuiz}
        alt="The homepage of my Full Stack Quiz App"
        repo="https://github.com/Desparta05/budgeting2go"
        link="https://budgeting2go.herokuapp.com/"
        paragraph="This project is to take a web application that is fully functional online, and convert it to a Progressive Web Application (PWA). 
        By definition, a PWA has offline functionality that allows the user to still use the main function of the app while their machine is not connected 
        to the internet. With the Budgeting2Go app, you can easily track your current amount of cash on-hand after submitting your transactions"
      />
      <ProjectCard
        name="DC Criminal Database"
        heading="Criminal Database"
        src={WeatherCentral}
        alt="The homepage of my Weather Central App"
        repo="https://github.com/Desparta05/DCcriminalDATABASE"
        link=""
        paragraph="This app is a simplified version of the famous BatComputer. It allows you to search ever villain and Superhero within the DC Universe. 
        I created this using full stack MERN (Mongo-Express-React-Node) application that will allow a user to send server requests through interaction with 
        React components. I used the axios npm package to perform request methods like GET, POST, and DELETE. The server is set up using Express.js, 
        and the database used is MongoDB, hence the MERN acronym! DC Comics doesn't officially have an API so I created my own using a WebScrapper I coded."
      />
      {/* <ProjectCard
        name=""
        heading=""
        src={CLIEmployeeTracker}
        alt="The main menu of my CLI app Employee Tracker"
        repo=""
        link=""
        paragraph="The user will be able to use this application to manage their employee's information, such as their name, ID, salary, title, and more! 
        This information will be stored in a database as the user operates the app. 
        Not only will the user write to the database, but they can also read and view the data entered.
        This project is useful for companies across industries because data is always being handled and needing to be stored or modified.
        Using the CLIEmployeeTracker will allow the user to maintain this data in a neat and reliable fashion."
      /> */}
    </>
  )
}

export default Projects;