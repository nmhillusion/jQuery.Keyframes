// Generated by CoffeeScript 1.6.3
(function(){var e,t,n,r,i,s,o,u;u="jQuery.keyframes";e='<p><a href="https://github.com/Ianus/jQuery.Keyframes">jQuery.Keyframes</a> is forked from <a href="https://github.com/krazyjakee/">@krazyjakee</a>\'s <a href="https://github.com/krazyjakee/jQuery-Keyframes/">jQuery-Keyframes</a></p>\n<p><a href="https://github.com/Ianus/jQuery.Keyframes">jQuery.Keyframes</a> like <a href="https://github.com/krazyjakee/jQuery-Keyframes/">jQuery-Keyframes</a> generates and plays CSS3 keyframes quickly and easily allowing you to concentrate on the content of your project whilst cutting down code.</p>\n<p><a href="https://github.com/Ianus/jQuery.Keyframes">jQuery.Keyframes</a> introduces</p>\n<ul>\n<li>some changes in the API </li>\n<li>$.keyframe.isSupported() to detect CSS animation support</li>\n<li>10% smaller minified version (2.256 kb vs 2.453 kb)</li>\n<li>support for keyframe redefinition: if you redifine an existing keyframe, running animation will reflect those changes</li>\n</ul>';n="https://github.com/Ianus/jQuery.Keyframes";t="/archive/master.zip";s='<html>\n  <head>\n    <style>\n          #square{\n            width: 100px;\n            height: 100px;\n            background: blue;\n            margin: auto;\n          }\n    </style>\n  </head>\n  <body>\n    <div id="counter"></div>\n    <div id="square"></div>\n  </body>\n  <!-- Include jQuery -->\n  <script src="js/jquery-1.10.2.min.js"></script>\n  <script src="js/jquery.keyframes.js"></script>\n  <script>\n      // declare a new keyframe animation\n      $.keyframe.define({\n        name: "rotation",\n        from: $.keyframe.browserCode()+"transform:rotate(0deg)",\n        to: $.keyframe.browserCode()+"transform:rotate(360deg)",\n      });\n      var rotationCount = 0;\n      // Play the keyframe\n      $("#square").playKeyframe({\n        name: "rotation",\n        duration: 1000,\n        repeat: "infinite",\n        complete: function(){\n          rotationCount++;\n          $("#counter").text("Rotations completed: " + rotationCount);\n        }\n      });\n  </script>\n</html>';o={"&":"&amp;","<":"&lt;",">":"&gt;"};r=function(e){return o[e]||e};i=function(e){return e.replace(/[&<>]/g,r)};$(function(){var r;r=i(s);$("pre > code").html(r);$("#page-title .anchor").text(u);$("#page-comment").html(e);$("#forkme-banner, #page-title .anchor").attr("href",n);return $("#download").attr("href",n+t)})}).call(this);