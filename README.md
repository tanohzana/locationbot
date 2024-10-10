# LocationBot

Enhance your applications with accurate location extraction. LocationBot is a powerful tool that parses country, state, and city information from any string—even with spelling errors—ensuring reliable geolocation data for seamless automation.

## Features

- Extract location information (country, city, street) from text input
- Handles spelling errors and variations in location names
- Easy integration with Node.js applications
- Utilizes a robust backend API for accurate results

## Installation

Install LocationBot using npm:

```bash
npm install locationbot
```

or

```bash
yarn add locationbot
```

## Usage

Here's an example of how to use LocationBot in your application:

```javascript
const { LocationBot } = require('locationbot');

const locationBot = new LocationBot('your-api-key');

locationBot.extractLocation('123 Main St, New York, USA').then((result) => {
  console.log(result);
});
```


