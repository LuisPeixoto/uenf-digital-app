<p align="center">
  <img src="banner.png" alt="UENF Digital Logo">
</p>

The "UENF Digital" app is a mobile extension of the UENF Digital portal, designed to enhance the accessibility of information and services of the State University of Northern Rio de Janeiro (UENF) directly through mobile devices. This app focuses on facilitating access to important university updates, library services, and dining options, all via smartphone. Its key features include access to and search for posts from the main UENF site, customizable notifications about new content, as well as essential library services such as book loans, reservations, consultations, and a suggestion box for improvements to the collection. The daily and weekly menus of the University Restaurant are also a highlighted feature, promoting convenience for the app's users.

The project "UENF Digital: A New Look" forms the basis that supports the development of the app, acting as a digital portal adapted to the needs of a connected generation. The initiative aims to provide a dynamic social communication platform that serves both the internal and external community of UENF, integrating modern information and communication technologies to facilitate access to and dissemination of information about the university and its activities.

Launched in 2017 and linked to the Pro-Rectorate of Extension and the UENF Communication Management, the portal project was developed by a multidisciplinary team of professors, University Open scholarship holders, and students. These collaborators combine theoretical and practical knowledge to create a portal that not only meets academic standards of quality and accessibility but also reflects the goals of a public and free institution.

Finally, UENF Digital aims to expand the communication of the initiatives of the "UENF Open Doors" program, unify the visual and textual language of the various extension activities of the university, and maximize the visibility of these activities. Through the mobile app and the portal, the project seeks to consolidate the institutional presence of UENF, promoting a positive impact both for the internal and external community, with efficient and modern communication.

## Table of Contents
- [Screenshots](#screenshots)
- [Key Features](#key-features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Screenshots


## Key Features

- **Post Feeds**: Access all posts from the UENF main site and UENF Digital Platform.
- **Post Search**: Easily find specific posts.
- **Notifications**:
  - Automatic updates on new posts.
  - Customizable alerts.
- **Library Services**:
  - Book loans, reservations, and consultations.
  - Publication access and periodical searches.
  - Suggestion box for library stock enhancement.
- **University Dining Menu**: Daily and weekly menus of the University Restaurant.

## Technologies

- **styled-components**: For modular and reusable CSS styling within the React Native framework.
- **react-native-vector-icons**: Provides a collection of icons to enhance the user interface.
- **axios**: A Promise-based HTTP client for efficient API consumption.
- **react-navigation**: Manages screen navigation for a smooth user experience.
- **react-hook-form**: Enhances form handling by minimizing re-renders and boosting performance.
- **yup**: Ensures input validation to maintain data integrity.
- **eslint**: Helps in identifying and reporting JavaScript patterns that could be problematic.
- **prettier**: Code formatter used to maintain code consistency.
- **Firebase Firestore**: NoSQL database for online and offline data storage and sync.
- **react-native-calendars**: Provides customizable calendar components, enabling easy implementation of features such as marked dates and interactive calendars in React Native applications.
- **react-native-gesture-handler**: Essential for handling touch-based interactions more robustly, improving the responsiveness and user interface smoothness on both iOS and Android platforms.
- **react-native-reanimated**: Offers a more powerful solution for creating fluid animations in React Native apps, facilitating complex animations that contribute to a dynamic user experience.
- **react-native-render-html**: Allows for the rendering of HTML content within React Native apps, which is particularly useful for displaying rich text or media content fetched from the web.
- **react-native-responsive-fontsize**: Helps in adjusting font sizes across different screen sizes and resolutions, ensuring text elements are legible and aesthetically pleasing on all devices.
- **react-native-safe-area-context**: Provides access to the safe area of a mobile device screen, ensuring UI elements are visible and interactable across different models and orientations.
- **react-native-screens**: Optimizes memory usage and performance by enabling native navigation components for screens in React Native apps, which is crucial for apps with many screens.
- **react-native-status-bar-height**: Helps in managing the status bar height, useful for creating layouts that adapt correctly to different iOS and Android devices.
- **react-native-svg**: Enables SVG support for React Native applications, allowing for scalable vector graphics to be used directly in components, which is key for high-quality visual elements.
- **react-native-web**: Expands the reach of React Native components to the web, facilitating code sharing and maintainability across mobile and web platforms.
- **react-native-webview**: Allows for embedding web content in native apps, enabling the use of web pages and online resources directly within React Native applications.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/UENF/UENFDigital.git
   cd UENFDigital
   ```

2. Install the necessary dependencies:
   ```bash
   yarn install
   ```

## Usage

- For Android:
  ```bash
  yarn android
  ```

- For iOS:
  ```bash
  cd ios && pod install && yarn ios
  ```

## Contact
Created by @luispeixoto - feel free to contact me!


## License

Distributed under the MIT License. See `LICENSE` for more information.
