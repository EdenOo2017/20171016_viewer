function eden(){
    $.ajax({
        async: true,
        crossDomain: true,
        url: "/get-Status1",
        method: "GET",
    }).done(function (response) {
        // console.log(response);
        var orange = new THREE.Vector4(1, 0.6, 0, 0.4);
        viewer.setColor(response, orange);
    });

    $.ajax({
        async: true,
        crossDomain: true,
        url: "/get-Status2",
        method: "GET",
    }).done(function (response) {
        // console.log(response);
        var pupple = new THREE.Vector4(1, 0, 1, 0.4);
        viewer.setColor(response, pupple);
    });

    $.ajax({
        async: true,
        crossDomain: true,
        url: "/get-Status3",
        method: "GET",
    }).done(function (response) {
        // console.log(response);
        var green = new THREE.Vector4(0.3, 0.7, 0, 0.4);
        viewer.setColor(response, green);
    });

    $.ajax({
        async: true,
        crossDomain: true,
        url: "/get-Status4",
        method: "GET",
    }).done(function (response) {
        // console.log(response);
        var blue = new THREE.Vector4(0, 0, 1, 0.4);
        viewer.setColor(response, blue);
    });

    $.ajax({
        async: true,
        crossDomain: true,
        url: "/get-Status5",
        method: "GET",
    }).done(function (response) {
        // console.log(response);
        var Lightseagreen = new THREE.Vector4(0.125, 0.68, 0.667, 0.4);
        viewer.setColor(response, Lightseagreen);
    });
}