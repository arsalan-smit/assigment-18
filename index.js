var range = document.getElementById("range");
var rangePercentage = document.getElementById("rangePercentage");
var file;
var img = document.getElementById("img");
var filepara = document.getElementById("filepara");
var fileicon = document.getElementById("fileicon");
var fileinput = document.getElementById("fileinput");
var imgInput = document.getElementById("img-input");
// var brightness = document.getElementById("brightness")
// var contrast = document.getElementById("contrast")
// var grayscale = document.getElementById("grayscale")
// var Sepia = document.getElementById("Sepia")
let currentEffect = "";
const canvas = document.getElementById('canvas');

function change() {
  var rangeValue = range.value;
  rangePercentage.innerHTML = rangeValue - 100 + "%";
}

function load() {
  img.style.display = "block";
  filepara.style.display = "none";
  fileicon.style.display = "none";
}

imgInput.addEventListener("click", () => {
  fileinput.click();
});

function handlerfileinput(e) {
  file = e.target.files[0];
  if (file) {
    img.src = URL.createObjectURL(file);
    img.addEventListener("load", load);
  }
}

function applyfillter() {
  let filterValue = range.value;
  if (currentEffect == "brightness") {
    img.style.filter = `brightness(${filterValue}%)`;
  } else if (currentEffect == "contrast") {
    img.style.filter = `contrast(${filterValue}%)`;
  } else if (currentEffect == "grayscale") {
    img.style.filter = `grayscale(${filterValue-100}%)`;
  } else if (currentEffect == "sepia") {
    img.style.filter = `sepia(${filterValue-100}%)`;
  } else if (currentEffect == "blur") {
    img.style.filter = `blur(${filterValue-100}px)`;
  } else if (currentEffect == "invert") {
    img.style.filter = `invert(${filterValue-100}%)`;
  } else if (currentEffect == "saturate") {
    img.style.filter = `saturate(${filterValue}%)`;
  }
  //  else if (currentEffect == "opacity") {
  //   img.style.filter = `opacity(${filterValue-100}%)`;
  // }
}

function checkfilter(filtertype) {
  console.log(filtertype);
  currentEffect = filtertype;
  if (filtertype == "brightness") {
    range.value = 0;
    rangePercentage.innerHTML = 0 + "%";
  } else if (filtertype == "contrast") {
    range.value = 0;
    rangePercentage.innerHTML = 0 + "%";
  }else if (filtertype == 'grayscale') {
    range.value = 0;
    rangePercentage.innerHTML = 0 + "%";
  }else if (filtertype == 'sepia') {
    range.value = 0;
    rangePercentage.innerHTML = 0 + "%";
  }else if (filtertype == 'blur') {
    range.value = 0;
    rangePercentage.innerHTML = 0 + "%";
  }else if (filtertype == 'invert') {
    range.value = 0;
    rangePercentage.innerHTML = 0 + "%";
  }else if (filtertype == 'saturate') {
    range.value = 0;
    rangePercentage.innerHTML = 0 + "%";
  }
  // else if (filtertype == 'opacity') {
  //   range.value = 0;
  //   rangePercentage.innerHTML = 0 + "%";
  // }
}

range.addEventListener("input", applyfillter);

function downloadImage() {
  const context = canvas.getContext('2d');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  // Apply the filter to the canvas context
  context.filter = img.style.filter;
  context.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Create a download link
  const link = document.createElement('a');
  link.download = 'edited-img.png';
  link.href = canvas.toDataURL();
  link.click();
}