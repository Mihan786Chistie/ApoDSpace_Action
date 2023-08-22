# ApoDSpace_Action
## Overview

The Astronomy Picture of the Day (APOD) Action for Actions on Google is a voice-activated application that allows users to fetch and display the Astronomy Picture of the Day from NASA's APOD API. Additionally, users can explore a gallery of previous APODs. This repository contains the code and resources required to create and deploy this Google Assistant Action.

## Features

- Fetch and display the Astronomy Picture of the Day.
- Explore a gallery of previous APODs.
- Interact with the Action using natural language voice commands.

## Getting Started

Follow these steps to set up and deploy the APOD Action:

1. **Prerequisites**: Ensure you have the following installed and configured:

   - [Node.js](https://nodejs.org/)
   - [Firebase CLI](https://firebase.google.com/docs/cli)
   - [Actions on Google SDK](https://developers.google.com/assistant/conversational/quickstart)

2. **Clone the Repository**: Clone this repository to your local machine using Git:

   ```shell
   git clone https://github.com/your-username/apod-action.git

3. **Configure Firebase**: Set up a Firebase project and configure your project using the Firebase CLI:

    ```shell
    firebase login
    firebase init

4. **Deploy the Action**: Deploy the Action to your Google Assistant using the Actions on Google SDK:

    ```shell
    npm install
    npm run deploy

5. **Test the Action**: Test the APOD Action in the Actions on Google Simulator or on a compatible Google Assistant device.

## Resources

- [NASA APOD API](https://api.nasa.gov/)
- [Actions on Google Documentation](https://developers.google.com/assistant/docs)
