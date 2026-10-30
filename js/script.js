/* SHATER - Main JavaScript */

"use strict";

document.addEventListener("DOMContentLoaded", function () {

  // تحديث السنة تلقائيًا
  document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  // إظهار وإخفاء كلمة المرور
  document.querySelectorAll("[data-toggle-password]").forEach(function (button) {

    button.addEventListener("click", function () {

      const inputId = button.getAttribute("data-toggle-password");
      const input = document.getElementById(inputId);

      if (!input) return;

      if (input.type === "password") {
        input.type = "text";
        button.textContent = "إخفاء";
      } else {
        input.type = "password";
        button.textContent = "إظهار";
      }

    });

  });

  // فتح وإغلاق القوائم
  document.querySelectorAll("[data-menu-toggle]").forEach(function (button) {

    button.addEventListener("click", function () {

      const menuId = button.getAttribute("data-menu-toggle");
      const menu = document.getElementById(menuId);

      if (!menu) return;

      menu.hidden = !menu.hidden;

      button.setAttribute(
        "aria-expanded",
        String(!menu.hidden)
      );

    });

  });

});
