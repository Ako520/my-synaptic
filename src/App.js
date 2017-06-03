import React from 'react';
import NavHeader from './Component/NavHeader.js';
import Footer from './Component/Footer.js';
import LeftNav from './Component/LeftNav.js';
import FrontBlog from './pages/frontBlog/FrontBlog.js';
import NotFound404 from './pages/404/404.js';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from '../node_modules/material-ui/styles/baseThemes/lightBaseTheme.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import synaptic from "synaptic"

injectTapEventPlugin();


class App extends React.Component {
  render () {
    let synaptic = require('synaptic'); // this line is not needed in the browser
    let Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

    function Perceptron(input, hidden, output) {
      // create the layers
      let inputLayer = new Layer(input);
      let hiddenLayer = new Layer(hidden);
      let outputLayer = new Layer(output);

      // connect the layers
      inputLayer.project(hiddenLayer);
      hiddenLayer.project(outputLayer);

      // set the layers
      this.set({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
      });
    }

    // extend the prototype chain
    Perceptron.prototype = new Network();
    Perceptron.prototype.constructor = Perceptron;
    return(
        <div>
          <h1>Welcome to wang of honour, ako</h1>
        </div>
    )
  }
}

export default App;
