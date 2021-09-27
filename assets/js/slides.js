"use strict";

const mainSlider = tns({
  container: ".main-slide-list",
  items: 4,
  slideBy: "page",
  autoplay: true,
  navContainer: ".main-slide-nav-list",
  controlsContainer: ".main .slide-controls",
  autoplayTimeOut: 2000,
  slideBy: 1,
  edgePadding: 450,
  autoplayButtonOutput: false,
  fixedWidth: 400,
  autoWidth: true,
});
const interiorSlide = tns({
  container: ".interior-slide-list",
  items: 4,
  slideBy: "page",
  autoplay: true,
  autoplayTimeOut: 2000,
  slideBy: 1,
  gutter: 20,
  autoplayButtonOutput: false,
  loop: false,
  controlsContainer: ".interior .slide-controls",
});

const designerSlide = tns({
  container: ".designer .slide-list",
  items: 4,
  slideBy: "page",
  autoplay: true,
  autoplayTimeOut: 2000,
  slideBy: 1,
  gutter: 20,
  autoplayButtonOutput: false,
  loop: false,
  controlsContainer: ".designer .slide-controls",
  onInit: true,
});
