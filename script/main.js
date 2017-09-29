(function() {
UseImages = document.querySelector("image-holder"),
thereading = document.querySelector(".heading"),
theSubhead = document.querySelevtor(".main-copy h2"),
theSeasonText = document.querySelector(".main-copy p"),
appliedClass;

function changeElement(){
  //make sure event stuffo is working//
//  debugger;//
let objectIndex = dynamicContent[this.id];
let subImages = document.querySelector(".subImagesContainer");

theSubhead.classList.add(this.is);
theHeading.classList.add(this.id);


}
theImages.forEach(function(element, index){
  //loop through for images and add event handling for each one//
  element.addEventListener("click", changeElements, false);
});
}();
