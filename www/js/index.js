var tokenurl = window.location.protocol + '//' + window.location.host + '/oauth/token';
function tokenAjax() {
  return $.ajax({
    url: tokenurl,
    dataType: 'json'
  });
}

var viewer;
var options = {};
var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE3LTA5LTA3LTE2LTE3LTQ2LWQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlLzE0MDQ3XzIwMTYtMTItMTkucnZ0';
var promise = tokenAjax();

promise.success(function (data) {
  options = {
    env: 'AutodeskProduction',
    accessToken: data.access_token
  };
  Autodesk.Viewing.Initializer(options, function onInitialized() {
    Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
  });
})

function onDocumentLoadSuccess(doc) {
  var viewables = Autodesk.Viewing.Document.getSubItemsWithProperties(doc.getRootItem(), { 'type': 'geometry' }, true);
  if (viewables.length === 0) {
    console.error('Document contains no viewables.');
    return;
  }

  var initialViewable = viewables[0];
  var svfUrl = doc.getViewablePath(initialViewable);
  var modelOptions = {
    sharedPropertyDbPath: doc.getPropertyDbPath()
  };

  var viewerDiv = document.getElementById('viewerDiv');

  viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerDiv);

  viewer.start(svfUrl, modelOptions, onLoadModelSuccess, onLoadModelError);

  if (onLoadModelSuccess) {
    viewer.loadExtension('Autodesk.ADN.Viewing.Extension.Color')
  }

}

function onDocumentLoadFailure(viewerErrorCode) {
  console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
}

function onLoadModelSuccess(model) {
  console.log('onLoadModelSuccess()!');
  console.log('Validate model loaded: ' + (viewer.model === model));
  console.log(model);
}

function onLoadModelError(viewerErrorCode) {
  console.error('onLoadModelError() - errorCode:' + viewerErrorCode);
}







