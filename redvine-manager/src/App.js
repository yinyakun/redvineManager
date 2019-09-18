import React from 'react';
import logo from './logo.svg';
import './App.css';
import Route from './pages/Route.js';

function App() {
  (function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=750){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    doc.title = "Honey Farms";
  })(document, window);
  return (
    <Route></Route>
  );
}

export default App;
