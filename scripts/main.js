(function (window) {
  'use strict';

  var App = window.App;

  // Select the part of the html to apply the handler to
  var DIV_SELECTOR_IOS = '[id="ios-download-btn"]';
  var DIV_SELECTOR_ANDROID = '[id="android-download-btn"]';

  var ButtonClickHandler = App.ButtonClickHandler;

  // Create two instances of ButtonClickHandler
  var iOSButtonClickHandler = new ButtonClickHandler(DIV_SELECTOR_IOS);
  var androidButtonClickHandler = new ButtonClickHandler(DIV_SELECTOR_ANDROID);

  iOSButtonClickHandler.addClickHandler('ios');
  androidButtonClickHandler.addClickHandler('android');

})(window);
