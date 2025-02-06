# The ATFUSA application 

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![image](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

Author: [Andrew Gyakobo](https://github.com/Gyakobo)

## Introduction

The ATFUSA React application is designed to showcase current Paralympic athletes competing in track and field events. 

## Methodology

The application's codebase includes several key components that define its structure and functionality.

### Project Structure

* `App.js`: Serves as the entry point of the application. It sets up the main navigation and initializes the app.

* `homeStack.js`: Defines the navigation stack for the home screens, managing transitions between different views.

* `Select_Sport/`: Contains components or screens related to selecting a specific sport.

* `Meets_screen/`: Includes components or screens that display information about various meets or events.

* `Individual/`: Houses components or screens that provide detailed information about individual athletes

### Views and Screens:

1. Select Sport Screen:
    
    * Purpose: Allows users to choose a specific sport to view related events and athletes. 

    * Components: Includes a list or grid of sports, each selectable by the user.

2. Meets Screen:

    * Purpose: Displays upcoming or ongoing meets/events in the selected sport.    

    * Components: Features a list of meets with details such as date, location, and pariticipating athletes.

3. Individual Athlete Screen:

    * Purpose: Provides detailed information about a selected athlete.

    * Components: Includes athlete's bio, statistics, event participation, and performance history.

### HTTP Request Structure

1. Fetching Sports Data:
    
    * File: `Select_Sport/SelectSportScreen.js`
    * Method: `fetch('https('https://api.atfusa.ort/sports'))` 
    * Description: Retrieves a list of availabel sports for users to select

2. Fetching Meets Data:

    * File: `Meets_screen/MeetsScreen.js`
    * Method: `fetch('https://api.atfusa.org/meets')`
    * Description: Obtains information about upcoming or ongoing meets/events

3. Fetching Individual Athlete Data:

    * File: `Individual/IndividualAthleteScreen.js`
    * Method: `fetch('https://api.atfusa.org/athletes/{athleteId}')`
    * Description: Fetches detailed information about a specific athlete, where `{athleteId}` is replaced with the athlete's unique identifier.

These requests are integral to the application's functionality, enabling it to display current data on Paralympic athletes and events.

# License
MIT
