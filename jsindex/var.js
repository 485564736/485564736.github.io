var oldsvgghtml=[];var oldgggghtml=[];var currentsvgghtml="";var currentgggghtml="";var bushu=0;var tdarray=document.getElementsByTagName("td");var colorshow=document.getElementById("colorshow");var colorvalue=document.getElementById("colorvalue");var colorwindow=document.getElementById("colorwindow");var guanbi=document.getElementById("guanbi");var diantarget;var SVG_NS="http://www.w3.org/2000/svg";var rulerCursorX=document.getElementById("rulerCursorX");var rulerCursorY=document.getElementById("rulerCursorY");var rulerCursorX1=document.getElementById("rulerCursorX1");var rulerCursorY1=document.getElementById("rulerCursorY1");var gongjutype;var gongjushape=null;var scrolltop;var scrollleft;var eee;var lineh=document.createElementNS("http://www.w3.org/2000/svg","line");var linev=document.createElementNS("http://www.w3.org/2000/svg","line");var offx;var offy;var offx1;var offy1;var zuhedianjianju;var pathh;var cx;var cy;var r;var d;var move=[];var move1=[];var lineto=[];var lineto1=[];var circlearray=new Array();var colorline;var minx;var miny;var maxx;var maxy;var xarray;var yarray;var wanggewidth=10;var shapeinfo={hadamard:'<g createshape="hadamard"><line x1="10" y1="50" x2="30" y2="50" stroke="black" stroke-width="1" /><line x1="70" y1="50" x2="90" y2="50" stroke="black" stroke-width="1"/><rect x="30" y="30" width="40" height="40" fill="white" stroke="black" stroke-width="1" /><text x="50" y="60" font-family="Verdana" font-size="20pt" fill="black" text-anchor="middle">H</text><circle tishi="yes" cx="10" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="90" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /></g>',paulix:'<g createshape="paulix"><line x1="10" y1="50" x2="30" y2="50" stroke="black" stroke-width="1" /><line x1="70" y1="50" x2="90" y2="50" stroke="black" stroke-width="1" /><rect x="30" y="30" width="40" height="40" fill="white" stroke="black" stroke-width="1" /><text x="50" y="60" font-family="Verdana" font-size="20pt" fill="black" text-anchor="middle">X</text><circle tishi="yes" cx="10" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="90" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /></g>',pauliy:'<g createshape="pauliy"><line x1="10" y1="50" x2="30" y2="50" stroke="black" stroke-width="1" /><line x1="70" y1="50" x2="90" y2="50" stroke="black" stroke-width="1" /><rect x="30" y="30" width="40" height="40" fill="white" stroke="black" stroke-width="1" /><text x="50" y="60" font-family="Verdana" font-size="20pt" fill="black" text-anchor="middle">Y</text><circle tishi="yes" cx="10" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="90" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /></g>',pauliz:'<g createshape="pauliz"><line x1="10" y1="50" x2="30" y2="50" stroke="black" stroke-width="1" /><line x1="70" y1="50" x2="90" y2="50" stroke="black" stroke-width="1" /><rect x="30" y="30" width="40" height="40" fill="white" stroke="black" stroke-width="1" /><text x="50" y="60" font-family="Verdana" font-size="20pt" fill="black" text-anchor="middle">Z</text><circle tishi="yes" cx="10" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="90" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /></g>',XiangWeiMen:'<g createshape="XiangWeiMen"><line x1="10" y1="50" x2="30" y2="50" stroke="black" stroke-width="1" /><line x1="70" y1="50" x2="90" y2="50" stroke="black" stroke-width="1" /><rect x="30" y="30" width="40" height="40" fill="white" stroke="black" stroke-width="1" /><text x="50" y="60" font-family="Verdana" font-size="20pt" fill="black" text-anchor="middle">S</text><circle tishi="yes" cx="10" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="90" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /></g>',TMen:'<g createshape="TMen"><line x1="10" y1="50" x2="30" y2="50" stroke="black" stroke-width="1" /><line x1="70" y1="50" x2="90" y2="50" stroke="black" stroke-width="1" /><rect x="30" y="30" width="40" height="40" fill="white" stroke="black" stroke-width="1" /><text x="50" y="60" font-family="Verdana" font-size="20pt" fill="black" text-anchor="middle">T</text><circle tishi="yes" cx="10" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="90" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /></g>',shoukongfeimen:'<g createshape="shoukongfeimen"><circle cx="50" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><circle cx="50" cy="70" r="5" stroke="black" stroke-width="1" fill="none" /><line x1="30" y1="30" x2="70" y2="30" stroke="black" stroke-width="1" /><line x1="30" y1="70" x2="70" y2="70" stroke="black" stroke-width="1" /><line x1="50" y1="30" x2="50" y2="76" stroke="black" stroke-width="1" /><circle tishi="yes" cx="30" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="70" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="30" cy="70" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="70" cy="70" r="3" stroke="black" stroke-width="1" fill="black" /></g>',jiaohuanmen:'<g createshape="jiaohuanmen"><line x1="45" y1="25" x2="55" y2="35" stroke="black" stroke-width="1" /><line x1="45" y1="65" x2="55" y2="75" stroke="black" stroke-width="1" /><line x1="45" y1="35" x2="55" y2="25" stroke="black" stroke-width="1" /><line x1="45" y1="75" x2="55" y2="65" stroke="black" stroke-width="1" /><line x1="30" y1="30" x2="70" y2="30" stroke="black" stroke-width="1" /><line x1="30" y1="70" x2="70" y2="70" stroke="black" stroke-width="1" /><line x1="50" y1="30" x2="50" y2="70" stroke="black" stroke-width="1" /><circle tishi="yes" cx="30" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="70" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="30" cy="70" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="70" cy="70" r="3" stroke="black" stroke-width="1" fill="black" /></g>',shoukongZmen:'<g createshape="shoukongZmen"><circle cx="50" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><line x1="30" y1="30" x2="70" y2="30" stroke="black" stroke-width="1" /><line x1="30" y1="70" x2="40" y2="70" stroke="black" stroke-width="1" /><line x1="60" y1="70" x2="70" y2="70" stroke="black" stroke-width="1" /><line x1="50" y1="30" x2="50" y2="60" stroke="black" stroke-width="1" /><rect x="40" y="60" width="20" height="20" fill="white" stroke="black" stroke-width="1" /><text x="50" y="75" font-family="Verdana" font-size="10pt" fill="black" text-anchor="middle">Z</text><circle tishi="yes" cx="30" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="70" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="30" cy="70" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="70" cy="70" r="3" stroke="black" stroke-width="1" fill="black" /></g>',shoukongxiangweimen:'<g createshape="shoukongxiangweimen"><circle cx="50" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><line x1="30" y1="30" x2="70" y2="30" stroke="black" stroke-width="1" /><line x1="30" y1="70" x2="40" y2="70" stroke="black" stroke-width="1" /><line x1="60" y1="70" x2="70" y2="70" stroke="black" stroke-width="1" /><line x1="50" y1="30" x2="50" y2="60" stroke="black" stroke-width="1" /><rect x="40" y="60" width="20" height="20" fill="white" stroke="black" stroke-width="1" /><text x="50" y="75" font-family="Verdana" font-size="10pt" fill="black" text-anchor="middle">S</text><circle tishi="yes" cx="30" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="70" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="30" cy="70" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="70" cy="70" r="3" stroke="black" stroke-width="1" fill="black" /></g>',toffoli:'<g createshape="toffoli"><circle cx="50" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><circle cx="50" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /><line x1="30" y1="30" x2="70" y2="30" stroke="black" stroke-width="1" /><line x1="30" y1="50" x2="70" y2="50" stroke="black" stroke-width="1" /><line x1="30" y1="70" x2="70" y2="70" stroke="black" stroke-width="1" /><line x1="50" y1="30" x2="50" y2="75" stroke="black" stroke-width="1" /><circle cx="50" cy="70" r="5" stroke="black" stroke-width="1" fill="none" /><circle tishi="yes" cx="30" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="70" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="30" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="70" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="30" cy="70" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="70" cy="70" r="3" stroke="black" stroke-width="1" fill="black" /></g>',fredkinmen:'<g createshape="fredkinmen"><circle cx="50" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><line x1="30" y1="30" x2="70" y2="30" stroke="black" stroke-width="1" /><line x1="30" y1="50" x2="70" y2="50" stroke="black" stroke-width="1" /><line x1="30" y1="70" x2="70" y2="70" stroke="black" stroke-width="1" /><line x1="50" y1="30" x2="50" y2="70" stroke="black" stroke-width="1" /><line x1="45" y1="45" x2="55" y2="55" stroke="black" stroke-width="1" /><line x1="45" y1="65" x2="55" y2="75" stroke="black" stroke-width="1" /><line x1="45" y1="55" x2="55" y2="45" stroke="black" stroke-width="1" /><line x1="45" y1="75" x2="55" y2="65" stroke="black" stroke-width="1" /><circle tishi="yes" cx="30" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="70" cy="30" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="30" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="70" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="30" cy="70" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="70" cy="70" r="3" stroke="black" stroke-width="1" fill="black" /></g>',celiangyunsuan:'<g createshape="celiangyunsuan"><line x1="20" y1="50" x2="40" y2="50" stroke="black" stroke-width="1" /><rect x="40" y="35" width="30" height="30" fill="white" stroke="black" stroke-width="1" /><line x1="55" y1="60" x2="61" y2="43" stroke="black" stroke-width="1" /><polygon points="59 41 63 44 64 37" fill="none" stroke="black" stroke-width="1" /><path d="M45,55 A10,10 0 0,1 65,55" fill="none" stroke="black" stroke-width="1"></path><circle tishi="yes" cx="20" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /></g>',jingdianbite:'<g createshape="jingdianbite"><line x1="20" y1="46" x2="80" y2="46" stroke="black" stroke-width="2" /><line x1="20" y1="54" x2="80" y2="54" stroke="black" stroke-width="2" /><circle tishi="yes" cx="20" cy="46" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="80" cy="46" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="20" cy="54" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="80" cy="54" r="3" stroke="black" stroke-width="1" fill="black" /></g>',nliangzibite:'<g createshape="nliangzibite"><line x1="20" y1="50" x2="80" y2="50" stroke="black" stroke-width="1" /><line x1="47" y1="55" x2="53" y2="45" stroke="black" stroke-width="1" /><text x="58" y="46" font-family="Verdana" font-size="10pt" fill="black" text-anchor="middle">n</text><circle tishi="yes" cx="20" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /><circle tishi="yes" cx="80" cy="50" r="3" stroke="black" stroke-width="1" fill="black" /></g>'};var gggg=document.createElementNS("http://www.w3.org/2000/svg","g");var pointt;