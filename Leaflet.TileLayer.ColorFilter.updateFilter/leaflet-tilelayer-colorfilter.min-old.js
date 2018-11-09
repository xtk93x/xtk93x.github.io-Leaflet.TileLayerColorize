/*
  Leaflet.TileLayer.ColorFilter
  (c) 2018, Claudio T. Kawakani
  A simple and lightweight Leaflet plugin to apply CSS filters on map tiles.
  https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter
*/
"use strict";function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,e){var r=[],i=!0,n=!1,l=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(r.push(o.value),!e||r.length!==e);i=!0);}catch(t){n=!0,l=t}finally{try{i||null==a.return||a.return()}finally{if(n)throw l}}return r}function _arrayWithHoles(t){if(Array.isArray(t))return t}L.TileLayer.ColorFilter=L.TileLayer.extend({intialize:function(t,e){L.TileLayer.prototype.initialize.call(this,t,e)},colorFilter:function(){var i=["blur:px","brightness:%","bright:brightness:%","bri:brightness:%","contrast:%","con:contrast:%","grayscale:%","gray:grayscale:%","hue-rotate:deg","hue:hue-rotate:deg","hue-rotation:hue-rotate:deg","invert:%","inv:invert:%","opacity:%","op:opacity:%","saturate:%","saturation:saturate:%","sat:saturate:%","sepia:%","sep:sepia:%"];return(this.options.filter?this.options.filter:[]).map(function(t){var e=t.toLowerCase().split(":");if(2===e.length){var r=i.find(function(t){return t.split(":")[0]===e[0]});if(r)return r=r.split(":"),e[1]+=/^\d+$/.test(e[1])?r[r.length-1]:"","".concat(r[r.length-2],"(").concat(e[1],")")}return""}).join(" ")},createTile:function(t,e){var r=L.TileLayer.prototype.createTile.call(this,t,e);return r.style.filter=this.colorFilter(),r},_getTile:function(){var t=L.TileLayer.prototype._getTile.call(this);return t.style.filter=this.colorFilter(),t},updateFilter:function(t){this.options.filter=t;for(var e=Object.entries(this._tiles),r=0;r<e.length;r++){var i=_slicedToArray(e[r],2),n=(i[0],i[1]);"0.7.7"===L.version?n.style.filter=this.colorFilter():n.el.style.filter=this.colorFilter()}}}),L.tileLayer.colorFilter=function(t,e){return new L.TileLayer.ColorFilter(t,e)};