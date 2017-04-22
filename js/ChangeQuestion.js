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

self.onmessage = function (event) {
    var questionCout = 100;             //질문 갯수
    var qId = Math.floor((Math.random()*questionCout));     //랜덤돌림
    console.log(qId);
    self.postMessage(qId);
}
