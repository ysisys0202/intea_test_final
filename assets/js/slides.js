"use strict";

const mainSlider = tns({
  container: ".main-slide-list",
  items: 4,
  slideBy: "page",
  autoplay: true,
  navContainer: ".main-slide-nav-list",
  controlsContainer: ".main-slide-controls",
  autoplayTimeOut: 2000,
  slideBy: 1,
  edgePadding: 450,
  autoplayButtonOutput: false,
  fixedWidth: 400,
  autoWidth: true,
});

const designerSlide = tns({
  container: ".designer .slide-list",
  items: 4,
  slideBy: "page",
  autoplay: true,
  autoplayTimeOut: 2000,
  slideBy: 1,
});
