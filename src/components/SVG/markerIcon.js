export function markerSvgURI(color,strokecolor,strokewidth){
    if(!color){
        color = 'blue';
    }
    if(!strokecolor){
        strokecolor = '#FFF';
    }
    if(!strokewidth){
        strokewidth = 0;
    }
    const colorMarkerSVG = '<svg width="237.4536px" height="362.8559px" xmlns="http://www.w3.org/2000/svg">'
    +'<style type="text/css"> .st0{fill:'
    + color 
    +';stroke:'
    + strokecolor 
    +';stroke-width:'
    + strokewidth
    +';stroke-linejoin:round;stroke-miterlimit:10;} </style>'
    +'<g id="XMLID_76_"> <path id="XMLID_77_" class="st0" d="M118.4211,357.8559c-2.9158-4.5856-5.8573-9.1614-8.7497-13.768 c-26.032-41.4592-50.9673-83.5533-72.9137-127.3446c-10.5983-21.1477-20.3879-42.651-27.4573-65.3158 c-4.5475-14.5795-5.1686-29.2853-3.3502-44.3388c2.1113-17.4773,6.8019-34.0696,15.7826-49.2646 C36.2882,33.1973,57.7627,17.4801,85.1412,9.8568c29.3519-8.1727,58.1399-6.1527,85.6688,6.9839 c29.9655,14.2993,48.2519,38.4732,56.81,70.2751c3.4599,12.8571,4.9486,26.0003,4.8266,39.2807 c-0.1099,11.9741-3.6869,23.2814-7.581,34.4642c-9.0692,26.0444-21.2939,50.6689-34.1264,74.9933 c-21.5261,40.803-45.2017,80.3545-70.026,119.2258C120.1236,356.0028,119.736,357.0964,118.4211,357.8559z"/> </g>'
    +'</svg>';
  
   const encodeMarkerURI = encodeURI("data:image/svg+xml," + colorMarkerSVG).replace('#', '%23');
    return encodeMarkerURI;
}
/* 
export function markerSvg(){
    if(!color){
        color = 'blue';
    }
    if(!strokecolor){
        strokecolor = '#FFF';
    }
    if(!strokewidth){
        strokewidth = 0;
    }
    const colorMarkerSVG = '<svg width="237.4536px" height="362.8559px" xmlns="http://www.w3.org/2000/svg">'
    +'<style type="text/css"> .st0{fill:'
    + color 
    +';stroke:'
    + strokecolor 
    +';stroke-width:'
    + strokewidth
    +';stroke-linejoin:round;stroke-miterlimit:10;} </style>'
    +'<g id="XMLID_76_"> <path id="XMLID_77_" class="st0" d="M118.4211,357.8559c-2.9158-4.5856-5.8573-9.1614-8.7497-13.768 c-26.032-41.4592-50.9673-83.5533-72.9137-127.3446c-10.5983-21.1477-20.3879-42.651-27.4573-65.3158 c-4.5475-14.5795-5.1686-29.2853-3.3502-44.3388c2.1113-17.4773,6.8019-34.0696,15.7826-49.2646 C36.2882,33.1973,57.7627,17.4801,85.1412,9.8568c29.3519-8.1727,58.1399-6.1527,85.6688,6.9839 c29.9655,14.2993,48.2519,38.4732,56.81,70.2751c3.4599,12.8571,4.9486,26.0003,4.8266,39.2807 c-0.1099,11.9741-3.6869,23.2814-7.581,34.4642c-9.0692,26.0444-21.2939,50.6689-34.1264,74.9933 c-21.5261,40.803-45.2017,80.3545-70.026,119.2258C120.1236,356.0028,119.736,357.0964,118.4211,357.8559z"/> </g>'
    +'</svg>';
} */

