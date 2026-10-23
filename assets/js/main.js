// 모바일 메뉴 열고 닫기
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });
}

// 위쪽 큰 로고가 화면 밖으로 나가면 메뉴 줄 왼쪽에 작은 로고를 보인다
const masthead = document.querySelector(".masthead");
if (masthead && "IntersectionObserver" in window) {
  new IntersectionObserver(([entry]) => {
    document.body.classList.toggle("is-scrolled", !entry.isIntersecting);
  }).observe(masthead);
}

// 논문 페이지: 종류(저널·학회 등)로 거르기
const chips = document.querySelectorAll(".pub-filter .chip");
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;
    chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
    let shown = 0;
    document.querySelectorAll(".pub-year").forEach((year) => {
      let count = 0;
      year.querySelectorAll(".pub").forEach((pub) => {
        const match = filter === "all" || pub.dataset.type === filter;
        pub.hidden = !match;
        if (match) count++;
      });
      year.hidden = count === 0;
      shown += count;
    });
    const empty = document.querySelector(".pub-empty");
    if (empty) empty.hidden = shown > 0;
  });
});
