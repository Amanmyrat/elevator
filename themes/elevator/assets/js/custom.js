const header     = document.querySelector("header");
const sectionOne = document.querySelector(".change-name");

const sectionOneOptions = {
	rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
		entries,
		sectionOneObserver
	) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				header.classList.add("nav-scrolled");
			} else {
				header.classList.remove("nav-scrolled");
			}
		});
	},
	sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const sectors = {
	"type": "FeatureCollection",
	"features": [{
		"type": "Feature",
		"properties": {
			"id": "sector-1",
			"sector": "1-nji bölümçe",
			"phone": "45-91-72",
			"address": "Parahat 3/1 jaý 2 “Ýe”",
			"elevators_cnt": "152",
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [[[58.38934, 37.907061], [58.392675, 37.906344], [58.392589, 37.902096], [58.38961, 37.902166], [58.389114, 37.902614], [58.389157, 37.903886], [58.38934, 37.907061]]]
		}
	}, {
		"type": "Feature",
		"properties": {
			"id": "sector-2",
			"sector": "2-nji bölümçe",
			"phone": "46-03-80",
			"address": "Parahat 1/2 jaý 1 “W”",
			"elevators_cnt": "149",
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [[[58.381082, 37.909872], [58.38028, 37.904046], [58.381669, 37.903921], [58.382742, 37.903536], [58.384137, 37.902909], [58.385378, 37.902414], [58.386592, 37.902103], [58.387425, 37.902171], [58.388246, 37.902332], [58.388764, 37.903408], [58.38891, 37.905159], [58.389083, 37.907617], [58.388998, 37.908009], [58.3873, 37.909106], [58.385548, 37.909911], [58.382168, 37.910283], [58.381082, 37.909872]]]
		}
	}, {
		"type": "Feature",
		"properties": {
			"id": "sector-3",
			"sector": "3-nji bölümçe",
			"phone": "96-55-32",
			"address": "Parahat 6 jaý 87 (ýarym ýerzemin)",
			"elevators_cnt": "129",
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [[[58.397569, 37.910172], [58.397694, 37.907115], [58.393149, 37.907377], [58.389545, 37.90817], [58.389582, 37.909774], [58.390235, 37.910309], [58.391818, 37.910287], [58.393682, 37.910329], [58.395972, 37.910307], [58.397569, 37.910172]]]
		}
	}, {
		"type": "Feature",
		"properties": {
			"id": "sector-4",
			"sector": "4-nji bölümçe",
			"phone": "51-22-05",
			"address": "Parahat 7/1 jaý 1 (ýarym ýerzemin)",
			"phone1": "51-50-11",
			"address1": "Parahat 7/2 jaý 11 (ýarym ýerzemin)",
			"elevators_cnt": "217",
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [[[58.405889, 37.895684], [58.422948, 37.895338], [58.423123, 37.904446], [58.415181, 37.904571], [58.415169, 37.900634], [58.406039, 37.900724], [58.405889, 37.895684]]]
		}
	}, {
		"type": "Feature",
		"properties": {
			"id": "sector-5",
			"sector": "5-nji bölümçe",
			"phone": "51-83-99",
			"address": "Parahat 7/5 jaý 37 (ýarym ýerzemin)",
			"elevators_cnt": "140",
		},
		"geometry": {
			"type": "Polygon",
			"coordinates": [[[58.405809, 37.895132], [58.405542, 37.885007], [58.413501, 37.884974], [58.413744, 37.895061], [58.405809, 37.895132]]]
		}
	}, {
        "type": "Feature",
        "properties": {
                "id": "sector-6",
                "sector": "3-nji bölümçe",
                "phone": "96-55-32",
                "address": "Parahat 6 jaý 87 (ýarym ýerzemin)",
                "elevators_cnt": "129",
        },
        "geometry": {
                "type": "Polygon",
                "coordinates": [[[58.405900, 37.910172], [58.405800, 37.906015], [58.397994, 37.90717], [58.397994, 37.910172]]]
        }
        }]
};

console.log(sectors);

let map = L.map('map', {
	attributionControl: false,
})
	.setView([37.89327681946215, 58.40527555872759], 14);

L.tileLayer('https://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}')
	.addTo(map);

let geojson = L.geoJson(sectors, {
	style: style,
	onEachFeature: onEachFeature
})
	.addTo(map);

function style(feature) {
	return {
		fillColor: '#f3f3f3',
		fillOpacity: 0.7,
		weight: 2,
		color: '#3e6fdc'
	};
}

function highlightFeature(e) {
	let layer = e.target;

	layer.setStyle({
		weight: 4,
		color: '#255ad0',
		fillOpacity: 0.8
	});

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	}
}

function resetHighlight(e) {
	geojson.resetStyle(e.target);
}

function zoomToFeature(e) {
	zoomToBounds(e.target.getBounds())
}

function zoomToBounds(bounds) {
	map.fitBounds(bounds, {
		maxZoom: 16,
		padding: [30, 30]
	});
}

function onEachFeature(feature, layer) {

	$('#' + feature.properties.id).on('click', () => zoomToBounds(layer.getBounds()))

	let tooltipHtml = '<h6 class="fw-bold">' + feature.properties.sector + '</h6>\
									 	 <div>Salgysy: <b>' + feature.properties.address + '</b></div>\
									   <div>Telefon belgisi: <b>' + feature.properties.phone + '</b></div>';

	if (feature.properties.address1) {
		tooltipHtml += '<div>Salgysy: <b>' + feature.properties.address1 + '</b></div>\
										<div>Telefon belgisi: <b>' + feature.properties.phone1 + '</b></div>';
	}

	tooltipHtml += '<div>Lift sany: <b>' + feature.properties.elevators_cnt + '</b></div>';

	layer.bindTooltip(tooltipHtml);

	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
		click: zoomToFeature
	});
}