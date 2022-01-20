(function (window){
    var helloSpeaker = {};
    var speakWord = "Hello";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
helloSpeaker.speak=function (name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker = helloSpeaker;
})(window);
