const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuButton = document.querySelector("[data-menu-button]");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

const leadForm = document.querySelector("[data-lead-form]");
const googleEntry = document.querySelector("[data-google-entry]");
const formStatus = document.querySelector("[data-form-status]");

leadForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(leadForm);
  const labels = {
    name: "お名前",
    email: "メールアドレス",
    organization: "組織名",
    role: "役職 / 担当",
    organization_type: "組織種別",
    training_topic: "研修テーマ",
    source_materials: "既存資料",
    timeline: "開始時期",
    budget: "概算予算",
    message: "ご相談内容",
  };

  const entryValue = Object.entries(labels)
    .map(([key, label]) => {
      const value = String(formData.get(key) || "").trim();
      return value ? `${label}: ${value}` : "";
    })
    .filter(Boolean)
    .join("\n");

  googleEntry.value = entryValue;

  if (formStatus) {
    formStatus.textContent = "送信しています...";
  }

  const body = new URLSearchParams();
  body.set("entry.1443266340", entryValue);

  try {
    await fetch(leadForm.dataset.googleAction, {
      method: "POST",
      mode: "no-cors",
      body,
    });
    leadForm.reset();
    if (formStatus) {
      formStatus.textContent = "ありがとうございます。内容を確認し、研修テーマと実施時期に合わせてご連絡します。";
    }
  } catch {
    if (formStatus) {
      formStatus.textContent = "送信できませんでした。時間をおいてもう一度お試しください。";
    }
  }
});
