/*function loadReport(){
    var getImport = document.querySelector('link[rel=import]');

    document.querySelector('#report').appendChild(document.importNode(getImport, true));
}*/

function loadReport(){
    $(document.ready(() => {
        $('#report').load('../templates/assets/report/127.0.0.1_16.html');
    }));
}

loadReport();
