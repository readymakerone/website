function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

function getval(getstr) {
	var val = $(getstr).val();
	if(val == '') {
		val = $(getstr).attr('placeholder');
	}
	return val;
}

function distanceFromNut(fret, scale) {
	return scale*(1-0.5**(fret/12));
}

function stringSpreadAt(distanceFromNut, nutSpread, bridgeSpread, scale) {
	return nutSpread + (bridgeSpread - nutSpread)*distanceFromNut/scale;
}

function fretboardWidthAt(distanceFromNut, nutWidth, nutSpread, bridgeSpread, scale) {
	return stringSpreadAt(distanceFromNut, nutSpread, bridgeSpread, scale) + (nutWidth - nutSpread);
}

function stringPositionsAt(distanceFromNut, nutSpread, bridgeSpread, scale, nString) {
	spread = stringSpreadAt(distanceFromNut, nutSpread, bridgeSpread, scale);
	for(let i=0; i<nString; i++) {
		yield spread*(i/(nString-1) - 1/2);
	}
}

function pathString(coords, close=false) {
	coords = [[0,0]].concat(coords);
	var pString = 'm';
	var xdiff = 0;
	var ydiff = 0;
	for (let i = 1; i < coords.length, i++) {
		pString += ' ';
		newpair = coords[i];
		oldpair = coords[i-1];
		xdiff = newpair[0]-oldpair[0];
		ydiff = newpair[1]-oldpair[1];
		pString += String(xdiff) + ',' + String(ydiff);
	}
	if (close) {
		pString += ' z';
	}
	return pString;
}

function sketchguitar(results) {
	var unit = getval('#units');
	var southpaw = (getval('#orientation') == 'left');
	var neckangle = getval('#neck-break-angle');
	var nutwidth = getval('#nut-width');
	var nutdepth = getval('#nut-depth');
	var nutspread = getval('#nut-string-spread');
	var nutthickness = getval('#nut-thickness');
	var bridgespread = getval('#bridge-string-spread');
	var scale = getval('#scale-length');
	var nfret = getval('#n-fret');
	var toptuners = getval('#top-tuners');
	var bottuners = getval('#bottom-tuners');
	var headstockangle = getval('#headstock-angle');
	var binding = $('#binding-yes').is(':checked');
	var bindingthickness = binding ? getval('#binding-thickness') : 0;
	var fboverhang = $('#overhang-yes').is('checked');
	var fboverhanglength = fboverhang ? getval('#fretboard-overhang') : 0;
	var nString = toptuners + bottuners;
	var delta = (nutwidth - nutspread)/2;
	var tunerspacing = (toptuners*bottuners == 0) ? 15/16 : (1+3/8);
	var tunerspacing = (unit == 'mm') ? tunerspacing*25.4 : tunerspacing;
	var tunerincline = Math.asin(nutspread/(5*tunerspacing));
	var firsttuner = (unit=='mm') ? 50 : 50/25.4;
	var tunerpostr = (unit=='mm') ? 3 : 3/25.4;
	var tunerholer = (unit=='mm') ? 4.165 : 4.165/25.4;
	var tunerxdelta = (tunerspacing**2 - (nutspread/5)**2)**0.5;
	var x0 = (unit=='mm') ? 1000 : 1000/25.4;
	var y0 = (unit == 'mm') ? 225 : 225/25.4;
	var height = (unit == 'mm') ? 1400 : 1400/25.4;
	var width = (unit == 'mm') ? 450 : 450/25.4;

	var xmlDoc = document.implementation.createDocument("", "", null);
	var NSMAP = {None:"http://www.w3.org/2000/svg",
             'dc':"http://purl.org/dc/elements/1.1/",
             'cc':"http://creativecommons.org/ns#",
             'rdf':"http://www.w3.org/1999/02/22-rdf-syntax-ns#",
             'svg':"http://www.w3.org/2000/svg",
             'xlink':"http://www.w3.org/1999/xlink",
             'sodipodi':"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
             'inkscape':"http://www.inkscape.org/namespaces/inkscape"}
	console.log(xmlDoc);

	sleep(1000);
	sleep(1000);
}

function handleSubmit(event) {
	sketchguitar(this);
}