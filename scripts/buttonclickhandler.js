(function (window) {
  'use strict';

  var App = window.App || {}
  var $ = window.jQuery;
  var platformDivExists = false;
  var platformDivRef = "";

  function ButtonClickHandler(selector) {

    if (!selector) {

      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);

    if (this.$formElement.length === 0) {

      throw new Error('Could not find element with selector: ' + selector);
    }
  };

  ButtonClickHandler.prototype.addClickHandler = function (platform) {

    // console.log('Setting Click handler for ' + platform + ' button' );

    var _buttonClickHandler = this;

    this.$formElement.on('click', function (event) {

    // event.preventDefault();
      _buttonClickHandler.addDiv(platform);
    });
  };

  ButtonClickHandler.prototype.addDiv = function (platform) {

  var divElement = new Div(platform);
  var dataPlatform = $("#data-platform-" + platform);
  var _divPlatformTapped = platform;

  if (platformDivExists) {

    if (_divPlatformTapped === platformDivRef) {

      return;

    } else {

      removeDiv(platformDivRef);

      platformDivRef = _divPlatformTapped;

      dataPlatform.append(divElement);
    };

  } else {

    dataPlatform.append(divElement);

    platformDivExists = true;
    platformDivRef = _divPlatformTapped;
  };

 };


function removeDiv(divPlatform) {

  switch (divPlatform) {

    case 'ios':
        $('#info-div-ios').remove();
        break;

    case 'android':
        $('#info-div-android').remove();
        break;

    default:
        console.log("No platform defined")
    };
};

function Div(platform) {

  var $div = $('<div></div>', {
     'app-platform': 'iOS',
     'class': 'panel-body',
     'id': 'info-div-' + platform
  });

  var $p1 = $('<p></p>');
  var $p2 = $('<p></p>', {
     'style': 'color: black'
  });
  var _info = "";
  var _alert = "";

  if (platform === 'ios') {

    // iOS
    _info = "Please check your device home screen for the app installation.";
    _alert = "If you receive a notification regarding an 'Untrusted Developer' upon launch; go to your device Settings, then General, then Profiles to trust the BMW of North America profile."

  } else {

    // Android
    _info = "Please check your device home screen for the app installation.";
    _alert = ""
  };

  $p1.append(_info);
  $p2.append(_alert);
  $div.append($p1);
  $div.append($p2);

  return $div;
 };

  App.ButtonClickHandler = ButtonClickHandler;
  window.App = App;

})(window);
