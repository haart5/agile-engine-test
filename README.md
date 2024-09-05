# Welcome to my technical test. By Arturo Martinez
# Agile Engine Technical Test

# How to execute the app?
- To execute the application just run 'npm install:all' in the root project
- After installation finishes, please run the command 'npm run start'

# About the application:
The application consist in two small apps, one for frontend and the other for backend:

# Backend
- The backend app just get the information from the CSV and transform into a JSON object to send it through the API created with Express.js and using csv-parser.

# Frontend
- The fronent app, call the API and gets all the data. Then, in the frontend we use the data to show recomended places, and a dictory of all places. Also you can click in the cards to show a detailed version of each Food Truck. This app uses Javascript, ReactJS, React Router and TailWindCSS. 

# Notes:
I was trying to use the latitude and longitude from the API to show in the cards the location of the food trucks, but I need to register into a free trial on Google API's to get a API_KEY, but that ask me for payment after register, so I didn't add it. Sorry for that! :C
Also I try to do a lot of different things but technically the test needs for 2 hours to complete, I spend a little bit more trying to do something with TailWindCSS that I never touched before.