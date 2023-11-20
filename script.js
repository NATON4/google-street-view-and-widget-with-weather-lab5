/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initialize() {
    const fenway = { lat: 49.4212928, lng: 32.1003293 };
    const map = new google.maps.Map(document.getElementById("map"), {
        center: fenway,
        zoom: 14,
    });
    const panorama = new google.maps.StreetViewPanorama(
        document.getElementById("pano"),
        {
            position: fenway,
            pov: {
                heading: 34,
                pitch: 10,
            },
        }
    );

    map.setStreetView(panorama);
}

window.initialize = initialize;