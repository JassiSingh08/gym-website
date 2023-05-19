# Gym Website

This is a gym website project developed using ReactJS and two APIs to provide users with an intuitive interface to search for and replicate exercises using GIFs. It also allows users to view relevant YouTube videos related to the exercises.

## Features

The website offers the following features:

1. Exercise Search: Users can search for exercises using the provided search bar. The search functionality is powered by one of the APIs integrated into the project.

2. Exercise Replication: Users can easily replicate exercises by viewing accompanying GIFs. The GIFs are fetched from another API integrated into the project.

3. YouTube Videos: Relevant YouTube videos related to the searched exercises are displayed on the website, allowing users to access additional instructional content.

4. Target Muscle and Equipment Information: Users can access detailed information about the target muscle group and equipment required for each exercise. This information is displayed along with the exercise details.

5. Similar Exercises: A separate page is dedicated to displaying a list of similar exercises that target the same muscle group and require similar equipment.

## Technologies Used

The gym website project utilizes the following technologies:

- ReactJS: The frontend of the website is developed using ReactJS, providing a modern and interactive user interface.

- APIs: Two APIs are integrated into the project. One API is responsible for fetching exercise data and providing search functionality, while the other API fetches GIFs related to the exercises.

## Project Structure

The project has the following structure:

- `src`: This directory contains the source code for the ReactJS application.
  - `components`: This directory contains reusable components used throughout the application, such as search bar, exercise card, video player, etc.
  - `pages`: This directory contains the main pages of the website, such as the home page, exercise details page, and similar exercises page.
  - `services`: This directory contains modules responsible for handling API requests and data fetching.
  - `utils`: This directory contains utility functions used across the application.
  - `App.js`: The main entry point of the application.
  - `index.js`: The file responsible for rendering the ReactJS application.

- `public`: This directory contains static assets, such as the website's favicon and the HTML template used as the base for the application.

- `README.md`: The readme file containing information about the project, its structure, and instructions for running the application.

## Getting Started

To run the gym website project locally, follow these steps:

1. Clone the project repository from GitHub.

2. Navigate to the project directory.

3. Install the project dependencies by running `npm install` or `yarn install`.

4. Start the local development server by running `npm start` or `yarn start`.

5. Open your web browser and access the website at `http://localhost:3000`.

## Contributing

Contributions to the gym website project are welcome! If you find any issues or would like to add new features, please submit a pull request on the project's GitHub repository.

## License

The gym website project is released under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the code as per the terms of this license.
