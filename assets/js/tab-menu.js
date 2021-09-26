"use strict";
{
  const tabNav = document.querySelector(".tab-nav");
  const tabBtns = document.querySelectorAll(".tab-nav-btn");
  const tabItems = document.querySelectorAll(".tab-content-item");
  let targetItem = null;
  console.log(tabBtns, tabItems);
  function setDataIdx(elements) {
    elements.forEach((element, idx) => {
      element.dataset.idx = idx;
    });
  }

  function findTargetItem(className) {
    while (!targetItem.classList.contains(className)) {
      targetItem = targetItem.parentNode;
      if (targetItem.nodeName === "BODY") {
        targetItem = null;
        return;
      }
    }
  }

  function init() {
    setDataIdx(tabItems);
    setDataIdx(tabBtns);
    tabActivate(0);
  }
  function tabActivate(idx) {
    tabItems[idx].classList.add("is-active");
    tabBtns[idx].classList.add("is-active");
  }
  function tabInactivate() {
    tabItems.forEach((tabItem) => {
      tabItem.classList.remove("is-active");
    });
    tabBtns.forEach((tabBtn) => {
      tabBtn.classList.remove("is-active");
    });
  }
  function btnClickHandler(e) {
    targetItem = e.target;
    findTargetItem("tab-nav-btn");

    if (targetItem) {
      const targetIdx = targetItem.dataset.idx;
      tabInactivate();
      tabActivate(targetIdx);
    }
  }
  tabNav.addEventListener("click", btnClickHandler);

  init();
}
