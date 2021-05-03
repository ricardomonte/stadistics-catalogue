# FGTG

**FGTG is a simple web app that displays a list of games, uses React and Redux, and fetches the game's data from IGDB. In addition, you can filter results and see the details of each game on a detail page. This project is built as the capstone project "Catalogue of Statistics" of the React-Redux module from Microvers.**

![website screenshots](https://media.giphy.com/media/eN45pMjdxDOczebtKJ/giphy.gif)

## :hammer: Built with:

- Html
- JavaScript
- React
- Redux
- Axios
- antd
- Jest
- React Testing Library

## :red_circle: Live Demo:

[Live demo](https://fgtg-frm-gamers-to-gamers.herokuapp.com/)

## :construction_worker: Getting Started

To get a local copy up and running follow these simple steps:

- Open the terminal where you want to clone this project and paste.

```
    git clone git@github.com:ricardomonte/stadistics-catalogue.git
```

- Access the folder cloned.

```
    cd stadistics-catalogue
```

- Install dependencies.

```
    npm install
```

- Lunch the App.

```
    npm start
```

#### Note:

_If, for any reason, the application crashes due to server side problems follow this instructions_

- First if the App is running stop it, in the terminal press

```
    crtl+c
```

- Then open your favourite editor. If is vscode type in the terminal

```
    code .
```

- Go to the API folder inside of src folder and change the url and urlGame in Api.js

```javaScript
  const url = 'http://localhost:5000/games/';
  const urlGame = `http://localhost:500/games/${id}`;
```

- Now open a new terminal in a folder where you want clone the following project then paste.

```
    git clone https://github.com/ricardomonte/express-proxy-igdb.git
```

- Access the folder cloned.

```
    cd express-proxy-igdb
```

- Install the dependencies

```
    npm install
```

- Install globally nodemon

```
    npm install -g nodemon
```

- Open the project with your favourite editor.
- Create .env file in the root
- Add your credentials

```javaScript
  // Example
    CLIENT_ID= 'YOUR_CLIENT_ID_HERE'
    CLIENT_SECRET='YOUR_CLIENT_SECRET_HERE'

  // To get the client id and the client secret you need to
  // create an account in Twitch.
```

- Then lunch the server.

```
    nodemon start
```

- Finally lunch once again the App

## :heavy_check_mark: Test

For testing:

- Open in terminal the folder just cloned.
- If you run 'npm install', continue reading. If not follow the instructions in the Getting Started section
- To run the test, in the terminal run.

```
    npm run test
```

## :bust_in_silhouette: Author

- Github: [@ricardomonte](https://github.com/ricardomonte)
- Twitter: [@ramnkco](https://twitter.com/ramnkco)
- LinkedIn: [Ricardo Montenegro](https://www.linkedin.com/in/ricantomontenegro/)

## :raised_hand: :raised_hand: Contributions

Contributions, issues and feature requests are welcome!

Feel free to check the [issues here](https://github.com/ricardomonte/stadistics-catalogue/issues).

## Show your support

Give a :star: if you like this project!.

## :grey_exclamation: Acknowlegment

- To [Microverse](https://www.microverse.org/)
- Mentor.
- Stand up team

## :memo: License

This project is [MIT](LICENSE) licensed.
