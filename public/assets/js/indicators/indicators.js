$(function() {
  "use strict";

  // Cache
  var w = window;
  var b = $("body");

  // Loading Indicator
  var LI = {};
  LI.element = '<div id="loading-indicator"><div id="loading-spinner"></div></div>';
  LI.selector = "#loading-indicator";
  LI.show = function() {
      $(this.selector).attr("class", "show");
  };
  LI.hide = function() {
      var that = this;
      setTimeout(function() {
        $(that.selector).attr("class", "");
      },500);
  };

  // Notification
  var NF = {};
  NF.element = '<div id="notice-indicator"><p></p></div>';
  NF.selector = "#notice-indicator";
  NF.show = function(message, timeout) {
      var that = this;
      timeout = timeout >= 2000 ? timeout : 2000;
      message = typeof message == "string" ? message : "";
      $(this.selector + " p").html(message);
      $(this.selector).attr("class", "show");
      setTimeout(function() {
        $(that.selector).attr("class", "");
      }, timeout);
  };

  // Add to page
  b.append($(LI.element));
  b.append($(NF.element));

  // Bind to window
  w.LI = LI;
  w.NF = NF;

});
