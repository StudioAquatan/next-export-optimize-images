"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"default",{enumerable:true,get:function(){return _default}});var formats=["jpeg","jpg","png","webp","avif"];var formatValidate=function(format){return formats.some(function(allowedFormat){return allowedFormat===format})};var _default=formatValidate;