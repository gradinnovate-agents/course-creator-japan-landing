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
const formStatus = document.querySelector("[data-form-status]");

leadForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(leadForm);
  const entryFields = Array.from(leadForm.querySelectorAll("[name^='entry.']"));
  const hasEmptyRequiredField = entryFields.some((field) => field.required && !field.value.trim());
  const emailField = leadForm.querySelector("input[type='email']");

  if (hasEmptyRequiredField) {
    if (formStatus) {
      formStatus.textContent = "必須項目を入力してください。";
    }
    return;
  }

  if (emailField && !emailField.validity.valid) {
    if (formStatus) {
      formStatus.textContent = "有効なメールアドレスを入力してください。";
    }
    emailField.focus();
    return;
  }

  if (formStatus) {
    formStatus.textContent = "送信しています...";
  }

  const body = new URLSearchParams();
  entryFields.forEach((field) => {
    body.set(field.name, String(formData.get(field.name) || "").trim());
  });

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
