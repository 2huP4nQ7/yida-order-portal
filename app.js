const pageMap = {
  home: "home",
  orders: "orders",
  "order-form": "order-form",
  approval: "approval",
  reports: "reports",
};

const placeholderTitles = {
  customers: "客户资料",
  prices: "商品价格",
  delivery: "配送任务",
  payment: "收款对账",
  settings: "系统设置",
};

const navItems = Array.from(document.querySelectorAll(".nav-item"));
const views = Array.from(document.querySelectorAll(".view"));
const placeholderTitle = document.querySelector("#placeholderTitle");

function showView(viewName) {
  const pageName = pageMap[viewName] || "placeholder";

  views.forEach((view) => {
    view.classList.toggle("active", view.dataset.page === pageName);
  });

  if (pageName === "placeholder") {
    placeholderTitle.textContent = placeholderTitles[viewName] || "模块页面";
  }

  const activeNav = viewName === "approval" || viewName === "order-form" ? "orders" : viewName;
  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.view === activeNav);
  });
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-view]");
  if (!target) return;
  showView(target.dataset.view);
});

const initialView = new URLSearchParams(window.location.search).get("view");
if (initialView) {
  showView(initialView);
}
