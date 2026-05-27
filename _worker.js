const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfyX30Pl3IXzZyxs0soXauGldZ5pQBA1ywJU6qTps49KNIbDA/formResponse";

const ALLOWED_ENTRY_FIELDS = new Set([
  "entry.1443266340",
  "entry.61605832",
  "entry.671315826",
  "entry.1352987572",
]);

const REQUIRED_ENTRY_FIELDS = [...ALLOWED_ENTRY_FIELDS];

const json = (body, init = {}) =>
  new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...(init.headers || {}),
    },
  });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/lead") {
      if (request.method !== "POST") {
        return json({ error: "method_not_allowed" }, { status: 405 });
      }

      const formData = await request.formData();
      const body = new URLSearchParams();

      for (const fieldName of REQUIRED_ENTRY_FIELDS) {
        const value = String(formData.get(fieldName) || "").trim();
        if (!value) {
          return json({ error: "missing_required_field", field: fieldName }, { status: 400 });
        }
        body.set(fieldName, value);
      }

      body.set("fvv", "1");
      body.set("pageHistory", "0");
      body.set("fbzx", "-7964737688309046008");
      body.set("submissionTimestamp", "-1");

      const googleResponse = await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        body,
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      });

      if (!googleResponse.ok) {
        return json({ error: "google_form_rejected" }, { status: 502 });
      }

      return json({ ok: true });
    }

    return env.ASSETS.fetch(request);
  },
};
