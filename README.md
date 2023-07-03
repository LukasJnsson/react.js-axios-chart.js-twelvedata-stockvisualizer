<div align="center">

**`Stock visualizer with React.js, Axios, Chart.js, Material UI, Twelve Data and Docker`**


***`Skills`***
<br/>

<img alt="React" width="40px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
<img alt="Axios" width="80px" style="padding-right:10px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Axios_%28computer_library%29_logo.svg/2560px-Axios_%28computer_library%29_logo.svg.png" />
<img alt="Chart.js" width="40px" style="padding-right:10px;" src="https://www.chartjs.org/img/chartjs-logo.svg" />
<img alt="Material UI" width="40px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
<img alt="Twelve Data" width="100px" style="padding-right:10px;" src="https://i.ibb.co/BPjN3fC/twelvedata-svg.png" />
<img alt="Docker" width="40px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" />
<br/>

#### Application that visualizes the closing price of the last 30 days for a selected stock. All stocks listed on NASDAQ (New York) are eligible. All data is fetched from the Twelve Data API with Axios as HTTP client. The data is visualized with Chart.js while React.js is used for the structure of the application. The autocomplete component for searching for a stock is built with Material UI (MUI).


### Create .env, add the API key from Twelve Data
```sh
REACT_APP_API_KEY=
```

## Node
### Install the dependencies
```sh
npm i
```

### Execute the application
```sh
npm start
```

## Docker
### Build image
```sh
docker build -t react.js-axios-chart.js-twelvedata-stockvisualizer:1.0.0 .
```
### Create and run container
```sh
docker run -d -p 3000:3000 --env-file .env.development --name react.js-axios-chart.js-twelvedata-stockvisualizer react.js-axios-chart.js-twelvedata-stockvisualizer:1.0.0
```
