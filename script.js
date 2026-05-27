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

  const payload = new URLSearchParams();

  for (const field of entryFields) {
    payload.set(field.name, field.value.trim());
  }

  for (const field of leadForm.querySelectorAll("input[type='hidden']")) {
    payload.set(field.name, field.value);
  }

  try {
    const response = await fetch(leadForm.action, {
      method: "POST",
      body: payload,
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error("Lead form submission failed");
    }

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
