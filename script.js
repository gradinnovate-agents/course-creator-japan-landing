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
const submitFrame = document.querySelector("[name='google-form-submit-frame']");
let hasPendingSubmission = false;

leadForm?.addEventListener("submit", (event) => {
  const entryFields = Array.from(leadForm.querySelectorAll("[name^='entry.']"));
  const hasEmptyRequiredField = entryFields.some((field) => field.required && !field.value.trim());
  const emailField = leadForm.querySelector("input[type='email']");

  if (hasEmptyRequiredField) {
    event.preventDefault();
    if (formStatus) {
      formStatus.textContent = "必須項目を入力してください。";
    }
    return;
  }

  if (emailField && !emailField.validity.valid) {
    event.preventDefault();
    if (formStatus) {
      formStatus.textContent = "有効なメールアドレスを入力してください。";
    }
    emailField.focus();
    return;
  }

  if (formStatus) {
    formStatus.textContent = "送信しています...";
  }

  hasPendingSubmission = true;
});

submitFrame?.addEventListener("load", () => {
  if (!hasPendingSubmission) {
    return;
  }

  hasPendingSubmission = false;
  leadForm.reset();
  if (formStatus) {
    formStatus.textContent = "ありがとうございます。内容を確認し、研修テーマと実施時期に合わせてご連絡します。";
  }
});

leadForm?.addEventListener("formdata", (event) => {
  for (const [name, value] of event.formData.entries()) {
    if (name.startsWith("entry.")) {
      event.formData.set(name, String(value).trim());
    }
  }
});

leadForm?.addEventListener("submit", () => {
  window.setTimeout(() => {
    if (!hasPendingSubmission) {
      return;
    }
    hasPendingSubmission = false;
    leadForm.reset();
    if (formStatus) {
      formStatus.textContent = "ありがとうございます。内容を確認し、研修テーマと実施時期に合わせてご連絡します。";
    }
  }, 2500);
});
