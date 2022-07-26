var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CLCAntolndelCampo2022_1 = new ol.format.GeoJSON();
var features_CLCAntolndelCampo2022_1 = format_CLCAntolndelCampo2022_1.readFeatures(json_CLCAntolndelCampo2022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLCAntolndelCampo2022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLCAntolndelCampo2022_1.addFeatures(features_CLCAntolndelCampo2022_1);
var lyr_CLCAntolndelCampo2022_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CLCAntolndelCampo2022_1, 
                style: style_CLCAntolndelCampo2022_1,
                interactive: true,
    title: 'CLC Antolín del Campo 2022<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_0.png" /> 1.1.1<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_1.png" /> 1.1.2<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_2.png" /> 1.2.1<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_3.png" /> 1.2.2<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_4.png" /> 1.2.5<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_5.png" /> 1.3.1.5<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_6.png" /> 1.4.1<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_7.png" /> 1.4.2.2<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_8.png" /> 1.4.2.3<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_9.png" /> 2.1<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_10.png" /> 2.2.3.2<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_11.png" /> 2.3.1<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_12.png" /> 2.3.2<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_13.png" /> 3.1.1<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_14.png" /> 3.1.1.1.2.2<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_15.png" /> 3.1.2<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_16.png" /> 3.1.3<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_17.png" /> 3.1.3.1<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_18.png" /> 3.1.4<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_19.png" /> 3.2.1<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_20.png" /> 3.2.1.2.2<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_21.png" /> 3.2.2.1<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_22.png" /> 3.2.2.2<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_23.png" /> 3.2.3<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_24.png" /> 3.3.1.1<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_25.png" /> 3.3.2<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_26.png" /> 3.3.3<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_27.png" /> 4.1.1<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_28.png" /> 4.2.1<br />\
    <img src="styles/legend/CLCAntolndelCampo2022_1_29.png" /> 5.1.1<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_CLCAntolndelCampo2022_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CLCAntolndelCampo2022_1];
lyr_CLCAntolndelCampo2022_1.set('fieldAliases', {'Clase': 'Clase', 'Nombre': 'Nombre', 'Texto': 'Texto', 'ID': 'ID', 'Area_ha': 'Area_ha', });
lyr_CLCAntolndelCampo2022_1.set('fieldImages', {'Clase': 'TextEdit', 'Nombre': 'TextEdit', 'Texto': 'TextEdit', 'ID': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_CLCAntolndelCampo2022_1.set('fieldLabels', {'Clase': 'no label', 'Nombre': 'no label', 'Texto': 'no label', 'ID': 'no label', 'Area_ha': 'no label', });
lyr_CLCAntolndelCampo2022_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});