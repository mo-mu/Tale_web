/**
 * Created by songm on 2017-03-04.
 */
importScripts("https://www.gstatic.com/firebasejs/3.6.10/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/3.6.10/firebase-auth.js")
importScripts("https://www.gstatic.com/firebasejs/3.6.10/firebase-database.js")
importScripts("https://www.gstatic.com/firebasejs/3.6.10/firebase-messaging.js")

var config = {
    apiKey: "AIzaSyColbhitRrtw649B0e3dv_FErFd98jX2Rs",
    authDomain: "tale-97db4.firebaseapp.com",
    databaseURL: "https://tale-97db4.firebaseio.com",
    storageBucket: "tale-97db4.appspot.com",
    messagingSenderId: "995377513212"
};
firebase.initializeApp(config);
var database = firebase.database();

self.onmessage = function (event) {

    var database = firebase.database();

   database.ref('user/' + event.data[0]).set({
       email:event.data[1],
       nickname:event.data[2]
   });
    self.postMessage("finish!!");
}
