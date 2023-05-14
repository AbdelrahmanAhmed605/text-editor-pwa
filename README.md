# Text Editor PWA

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Live Deployed Application: https://limitless-meadow-95370.herokuapp.com/**

## Description

The main objective of this project is to create a browser-based text editor that meets progressive web application (PWA) standards. The PWA standards require that the text editor has fast performance, can run on any browser, is responsive on any screen size, has a custom offline page, and is installable. To achieve this goal, Abdelrahman utilized an existing codebase and implemented several features such as webpack configurations with plugins and module rules, service workers, and indexedDB for storage. The webpack configurations were defined to format the outputted webpack-built folder. The indexedDB was developed to perform CRUD operations that save data to the database when the user exits the web application or switches focus away from the application window. When the user revisits the webpage, the data is retrieved from the indexedDB and displayed on the application window. By utilizing both the service worker and the indexedDB, the application is able to function offline while also ensuring that data is securely stored. Additionally, the application stores data in the local storage as a backup in case the indexedDB is not supported by the browser. In this project, Abdelrahman learnt the following skills:
- Configuring webpack to optimize application performance
- Incorporating appropriate plugins and module rules into the webpack configuration
- Implementing service workers using workbox to enhance offline functionality
- Registering cache routes to the service worker to improve page load times
- Adding manifest plugins to enable installation of the application
- Adding front-end logic to enable installation of the application via click event listeners
- Implementing hot module reloading to improve the development phase by automatically updating the page with code changes
- Performing CRUD (Create, Read, Update, Delete) operations on an indexedDB for data storage and retrieval.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

The application is published using Heroku, so you can access it without installing it using the following link: https://limitless-meadow-95370.herokuapp.com/. However, if you wish to run the application on your local device, you need to follow these steps. First, navigate to the main directory of the repository and execute the `npm install` command to install all the required dependencies for each directory in the project. Once the dependencies are installed, run the `npm run build` command to build the webpack application. Finally, execute the `npm run start` command to start the application. The CLI will print the port being used for the application, which should be set manually to port 3000 if the application is being run on your device. Then, go to `http://localhost:3000/` on your web browser to use the application.

## Usage

To use the application, it is necessary to follow the installation instructions to run it on the local device or visit the live deployed application. After accessing the application, users can install it locally by clicking on the install button. The editor window allows users to enter text, which is automatically saved to the database when the user exits or switches focus away from the application window. Upon returning to the webpage, users can see their last saved text. The application can also be used offline, and any text entered while offline is stored in the database until the user reconnects. Users can view their indexedDB data by navigating to the web browser's developer tools and selecting the indexedDB option in the left sidebar. The service worker option is also available in the left sidebar for users to view the service worker.

## License

This project is licensed under the MIT License. To see the license permissions for commercial and non-commercial use, modification, and distribution of the software, please see the full text of the license, available at https://opensource.org/licenses/MIT.

## How to Contribute

N/A

## Tests

N/A

## Questions

If you have any questions regarding this application, feel free to reach me at abdelrahman.ahmed605@hotmail.com with the subject title "Questions for Text Editor PWA"
You can also find me on github here: https://github.com/AbdelrahmanAhmed605



