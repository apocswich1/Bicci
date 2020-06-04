var storageRef = firebase.storage().ref();
var uploadDoc = storageRef.child(`/thumbnails_product/${body.id}/${body.id}.jpg`).put(filess[0]);
uploadDoc.on('state_changed', function (snapshot) {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
            break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
            break;
    }
}, function (error) {

}, function () {
    uploadDoc.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        let document = "thumbnail";
        let data = {}
        data[document] = downloadURL;
        console.log(data);
        const refWasher = firebase.firestore().collection('products').doc(body.id);
        refWasher.set(data, { merge: true }).then(async resp => {
            console.log("Congrats...");
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
});