<a name="readme-top"></a>

<div align="center">

  <img src="./public/logo_planet.png" alt="logo" width="100" height="auto" />
  <br/>

### Space Traveler's Hub
<b>Space Traveler's Hub</b> is a Web Application for a company that provides commercial and scientific space travel services.<br>The application allows users to:<br> 1) Book rockets and, <br> 2) Join to selected space missions.<br>
<sub><b>SpaceX API</b> is used to get real live data for rockets and space missions.</sub>

</div>

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [🚀 Space Traveler's Hub ](#-space-travelers-hub-)
    - [Preview of Space Traveler's Hub App.](#preview-of-space-travelers-hub-app)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Available Scripts](#available-scripts)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [⭐ Show your support ](#-show-your-support-)
  - [📝 License ](#-license-)

# 🚀 Space Traveler's Hub <a name="about-project"></a>

*Space Traveler's Hub* is a Web Application for a company that provides commercial and scientific space travel services.<br>The application allows users to:
1) Book rockets and,
2) Join to selected space missions.

<sub><b>SpaceX API</b> is used to get real live data for rockets and space missions.</sub>

<div align="center">

### Preview of Space Traveler's Hub App.

<p>
  <sup>The Space Travelers' Hub consists of <b>Rockets</b>, <b>Missions</b> and, <b>My Profile</b> page.</sup><br>
  <img src="./src/assets/imgs/wireframes/wf_st_rockets_home.png" alt="HomePage" width="600" height="auto" /><br>
  <sup>the <b>HomePage (Rockets)</b> section displays a list of all available SpaceX rockets.<br>Users can book each rocket by clicking the reservation button or cancel the previously made booking.</sup><br><br>
  <img src="./src/assets/imgs/wireframes/wf_st_missions.png" alt="Missions" width="600" height="auto" /><br>
  <sup>the <b>Missions</b> displays a list of current missions along with their brief description and participation status.<br>There is also a button next to each mission that allows users to join the selected mission or leave the mission the user joined earlier.</sup><br><br>
  <img src="./src/assets/imgs/wireframes/wf_st_missions.png" alt="Missions" width="600" height="auto" /><br>
  <sup>the <b>My Profile</b> section displays all reserved rockets and space missions.</sup><br><br>
</p>

</div>

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>
This project was bootstrapped with:
  <ul>
    <li>
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
      <img align="center" title="ReactJS" alt="react js" width="20px" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> Create React App</a>
    </li>
    <li>
      <a href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
      <img align="center" title="React/Redux" alt="react redux" width="20px" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" /> React Redux</a>
    </li>
  </ul>


### Key Features <a name="key-features"></a>

- *Single Page App (SPA), with two Pages Rockets(home), MyProfile.*
- *Lists Rockets that are avaliable.*
- *Allows users to create or cancel a rocket reservation.*
- *MyProfile page, shows current status of user's revervations.*


<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!--
## 🚀 Live Demo <a name="live-demo"></a>

- <a href="https://luigirazum.github.io/mv-books-log/" target="_blank" rel="noopener noreferrer">BooksLog App - Live Demo (coming soon...)</a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy of this project up and running, follow these steps.

### Prerequisites

In order to run this project locally you need `git` installed. Please got to [Getting Started - Installing Git guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and follow the steps described for your system to install `git`.

- ### Setup
    Clone this repository to your desired folder:
    ```sh
    cd my-folder
    git clone git@github.com:luigirazum/mv-space-travelers-app.git
    ```
- ### Install
    Install the package dependencies for this project with:
    ```sh
    cd mv-space-travelers-app
    npm install
    ```


### Available Scripts
- #### Run
    In the project directory, you can run:

    ```sh
    npm start
    ```

  - Runs the app in the development mode.
    - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
  - The page will reload when you make changes.
  - You may also see any lint errors in the console.

- #### Test
    ```sh
    npm test
    ```

   - Launches the test runner in the interactive watch mode.\
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- #### Build
    ```sh
    npm run build
    ```

  - Builds the app for production to the `build` folder.
    - It correctly bundles React in production mode and optimizes the build for the best performance.
  - The build is minified and the filenames include the hashes.
  - Your app is ready to be deployed!\
    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<!-- 
### Deployment

You can deploy this project using:
```sh
  npm deploy
```
-->
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👨‍💻 Luis Zubia

- GitHub: <a href="https://github.com/luigirazum" target="_blank" rel="noopener noreferrer">@luigirazum</a>
- Twitter: <a href="https://twitter.com/LuigiRazum" target="_blank" rel="noopener noreferrer">@LuigiRazum</a>
- LinkedIn: <a href="https://linkedin.com/in/luiszubia" target="_blank" rel="noopener noreferrer">Luis Raul Zubia Maciel</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🔭 Future Features <a name="future-features"></a>

- [ ] *Enhance MyProfile with a Cancel Reservation button, for the Rockets that the user reserved.*
- [ ] *Enhance MyProfile with a Leave Mission button, for the Space Missions that the user joined to.*


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

In order to improve this project, contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgments"></a>
- 👏 I would like to thank the support of my partners.
- 🎨 The App logo was taken from [Planet icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/planet).


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐ Show your support <a name="support"></a>

I really enjoyed making this project, so, if you like it, I appreciate your support giving a ⭐.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--
## ❓ FAQ <a name="faq"></a>

- *Why should you use this project?*

  - Because you can realize what you can achieve using this amazing tool.

- *Why did I make this project?*

  - In order to start putting in practice the use of WebPack, JS ES6 modules and API's.


<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>