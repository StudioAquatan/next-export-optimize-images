"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"default",{enumerable:true,get:function(){return _default}});var _lodashUniqwith=_interopRequireDefault(require("lodash.uniqwith"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var uniqueItems=function(items){return(0,_lodashUniqwith.default)(items,function(a,b){return a.src===b.src&&a.width===b.width&&a.quality===b.quality})};var _default=uniqueItems;