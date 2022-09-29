const galactic_ra  = [266.40498829, 318.00438151,  86.40498829, 138.00438151, 266.40498829];
const galactic_dec = [-28.93617776,  48.32963721,  28.93617776, -48.32963721, -28.93617776];
const ecliptic_l = [ 96.33728337, 206.98913108, 276.33728337,  26.98913108,  96.33728337];
const ecliptic_b = [-60.18855195, -11.42449097,  60.18855195,  11.42449097, -60.18855195];

var plotly_template = {
    type: 'scattergeo',
    mode: 'markers+text',
    text: NearbyGalaxies.map( e => {return e.GalaxyName}),
    lon: NearbyGalaxies.map( e => {return e.RA_deg}),
    lat: NearbyGalaxies.map( e => {return e.Dec_deg}),
    marker: {
        size: 4,
        // color: [
        //     '#bebada', '#fdb462', '#fb8072', '#d9d9d9', '#bc80bd',
        //     '#b3de69', '#8dd3c7', '#80b1d3', '#fccde5', '#ffffb3'
        // ],
        line: {
            width: 1
        }
    },
    name: 'NearbyGalaxies',
    textposition: 'bottom right'
    // textposition: [
    //     'top right', 'top left', 'top center', 'bottom right', 'top right',
    //     'top left', 'bottom right', 'bottom left', 'top right', 'top right'
    // ],
};

var ecliptic_line = {
    type: 'scattergeo',
    mode: 'lines',
    name: "Ecliptic",
    lon: [0,90,180,270,360],
    lat: [0,0,0,0,0],
    line: {
        width: 1,
        dash: 'dashdot'
    }
};

var galactic_line = {
    type: 'scattergeo',
    mode: 'lines+markers',
    name: "Galactic plain",
    lon: galactic_ra,
    lat: galactic_dec,
    text: ["Galactic center","","","","Galactic center"],
    line: {
        width: 1,
        dash: 'dashdot'
    },
    marker: {
        size: [0,0,0,0,8]
    }
};

const plotly_layout = {
    title: 'NearbyGalaxies',
    font: {
        family: 'Droid Serif, serif',
        size: 8
    },
    titlefont: {
        size: 16
    },
    geo: {
        coastlinewidth: 0,
        projection: {type: "aitoff"},
        resolution: 50,
        lonaxis: {
            'range': [-180, 180],
            'showgrid': true
        },
        lataxis: {
            'range': [-90, 90],
            'showgrid': true
        },
    }
};
