(function () {
  var buttons = document.querySelectorAll(".lang-btn");
  var stored = null;
  try {
    stored = localStorage.getItem("ambition-lang-mode");
  } catch (e) {}

  function setMode(mode) {
    if (mode !== "en" && mode !== "cn" && mode !== "bilingual") {
      mode = "bilingual";
    }
    document.body.classList.remove("mode-en", "mode-cn", "mode-bilingual");
    document.body.classList.add("mode-" + mode);
    buttons.forEach(function (btn) {
      var on = btn.getAttribute("data-mode") === mode;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    try {
      localStorage.setItem("ambition-lang-mode", mode);
    } catch (e) {}
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setMode(btn.getAttribute("data-mode"));
    });
  });

  setMode(stored || "bilingual");
})();
