# UI Design: Course Creator Japan Landing

## Design Objective

Design a serious B2B landing page for Japanese training providers, universities, associations, and companies that need AI/DX training packages.

The page should feel operational, credible, and precise. It should not feel like a generic AI startup page, a flashy SaaS launch, or a consumer course sales page.

Primary user action:

> Book a 30-minute consultation.

Secondary user action:

> Request a sample delivery package.

## Audience Mindset

Users arrive with practical concerns:

- Can this help us launch training faster?
- Can it fit our existing training, subsidy, or reporting workflow?
- Is the content reviewable and safe to deliver?
- Does it reduce staff workload?
- Can we trust the process enough to discuss a pilot?

They are not primarily looking for AI novelty.

## Content Language

Primary page language should be Japanese.

Tone:

- Professional
- Specific
- Operational
- Low-hype
- Outcome-oriented

Avoid:

- Overpromising automation
- Claiming official certification endorsement
- Promising exam pass rates
- Using vague AI buzzwords
- Making the hero about "beautiful slides"

## Page Structure

### 1. Hero

Goal:

Immediately communicate that this is about AI/DX training delivery, not slide generation.

Recommended headline:

> AI/DX研修を、実施可能な教材・レビュー記録・成果報告まで整える

Supporting copy:

> Course Creatorは、AI/DX研修の企画、教材、講師資料、確認テスト、専門家レビュー、成果報告を一つの交付パッケージとして整えるためのAI CourseOpsワークフローです。

Primary CTA:

> 30分相談を予約する

Secondary CTA:

> サンプルを見る

Hero layout:

- Left: headline, subcopy, CTA buttons, proof points
- Right: visual workflow preview showing "Requirement -> Training package -> Review -> Report"
- Avoid decorative abstract gradients as the primary visual.
- Use a real product-style preview: course map, slide thumbnail, review notes, report output.

Hero proof points:

- 教材制作
- 講師用資料
- 専門家レビュー
- 成果報告

### 2. Problem Section

Title:

> AI研修は、教材を作るだけでは終わりません

Show four work burdens:

1. 研修要件をカリキュラムに落とし込む
2. 講師が使える教材と演習を準備する
3. AI生成内容を人がレビューする
4. 実施後の成果報告を作成する

Use a dense but readable four-column grid on desktop and stacked cards on mobile.

### 3. Workflow Section

Title:

> 研修要件から交付物までの流れ

Steps:

1. 要件整理
2. 研修設計
3. 教材生成
4. 専門家レビュー
5. 修正・品質確認
6. 成果報告

Interaction:

- On desktop, show a horizontal workflow timeline.
- On mobile, show a vertical stepper.
- Each step should reveal one concrete artifact.

### 4. Deliverables Section

Title:

> 交付パッケージに含まれるもの

Deliverable list:

- 研修マップ
- 講師用スライド
- 受講者用資料
- 確認テストと解説
- 講師ガイド
- シラバス / 目標対応表
- レビュー記録
- 成果報告テンプレート

UI pattern:

- Use compact cards.
- Each card should have an icon, title, one-line description, and artifact type tag.
- Cards should not be oversized marketing blocks.

### 5. Use Cases Section

Title:

> 想定ユースケース

Use cases:

1. 生成AIリテラシー研修
2. G検定 / 生成AIパスポート対策講座
3. 社内AI利用ルール研修
4. DX / リスキリング講座
5. 業界別AI活用研修

For each:

- Who owns it
- What source material is used
- What output is created

### 6. Review and Governance Section

Title:

> AI生成教材を、そのまま納品しない

This section differentiates the product.

Explain:

- Human expert review
- Page/module-level comments
- Revision status
- Review summary
- Evidence for stakeholders

UI pattern:

- Show a split work surface:
  - Left: slide/page preview
  - Right: review comments and status labels
- Labels:
  - 確認済み
  - 修正が必要
  - 要出典確認
  - 表現調整

### 7. Package Section

Title:

> 小さく始められる導入パッケージ

Package:

`AI/DX研修 立ち上げパッケージ`

Include:

- Scope
- Timeline: 4-6 weeks
- Best for
- Deliverables
- Consultation CTA

Do not publish exact price on the first version unless the business decides to qualify leads by budget upfront.

Optional budget qualifier in form:

- 100万円未満
- 100-300万円
- 300-500万円
- 500万円以上
- 未定

### 8. Proof Section

Title:

> 実例としての認証対策教材ワークフロー

Use iPAS-style work as a process proof, not as the main Japan offer.

Show:

- Requirement/certification outline
- Course map
- Slide generation
- Review workflow
- Report output

Avoid:

- Saying it is directly equivalent to Japanese exams.
- Over-indexing the landing page around Taiwan.

### 9. Contact Section

Title:

> 研修化したいテーマを相談する

Fields:

- Name
- Organization
- Role
- Email
- Organization type
- Training topic
- Existing source materials
- Expected launch timeline
- Need for review/reporting
- Budget range
- Message

CTA:

> 相談を送信する

After-submit message:

> ありがとうございます。内容を確認し、研修テーマと実施時期に合わせてご連絡します。

## Visual Style

### Direction

The interface should look like a workflow and delivery system, not a course marketplace.

Keywords:

- Structured
- Trustworthy
- Editorial
- Operational
- Quietly technical

Avoid:

- Purple-blue gradient dominance
- Floating orb backgrounds
- Overly rounded playful cards
- Mascots or cartoon AI visuals
- Giant hero claims without evidence

### Color Tokens

Use a restrained multi-color system:

```css
:root {
  --color-bg: #f7f8f5;
  --color-surface: #ffffff;
  --color-text: #1f2723;
  --color-muted: #66736d;
  --color-border: #d8ded8;
  --color-primary: #1e6f5c;
  --color-primary-strong: #12483c;
  --color-accent: #c9792b;
  --color-info: #315f9b;
  --color-warning: #a15c1f;
  --color-success: #2f7d54;
  --color-danger: #9b2f36;
}
```

Rationale:

- Green suggests operations, reliability, and learning without leaning into generic blue SaaS.
- Ochre/orange accent gives warmth and helps CTA contrast.
- Blue is reserved for information states, not the whole brand.

### Typography

Japanese-first font stack:

```css
font-family:
  "Noto Sans JP",
  "Hiragino Kaku Gothic ProN",
  "Yu Gothic",
  system-ui,
  sans-serif;
```

Type scale:

- Hero: 44px desktop, 34px tablet, 28px mobile
- Section title: 30px desktop, 24px mobile
- Card title: 18px
- Body: 16px
- Small/meta: 13px

Line height:

- Headings: 1.18 to 1.28
- Body: 1.7 for Japanese readability

No negative letter spacing.

### Layout

Desktop:

- Max content width: 1120px
- Section padding: 72px vertical
- Hero min-height: not full screen; keep next section visible
- Grid: 12 columns
- Card radius: 8px max

Mobile:

- Padding: 20px
- Sections: 48px vertical
- Cards stack in single column
- CTA buttons full-width when paired

### Spacing Scale

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 72px;
```

## Components

### Header

Elements:

- Logo/wordmark
- Nav links:
  - 課題
  - 流れ
  - 交付物
  - レビュー
  - 相談
- Primary CTA button

Behavior:

- Sticky on scroll
- Slight shadow or border after scroll
- Mobile uses menu icon and full-height drawer

### Button

Variants:

- Primary: green background, white text
- Secondary: white background, green border
- Text: inline link with arrow icon

States:

- Hover
- Focus-visible
- Disabled
- Loading

### Artifact Card

Fields:

- Icon
- Title
- Description
- Artifact tag

States:

- Default
- Hover with subtle border darkening

### Workflow Step

Fields:

- Step number
- Step title
- Output artifact
- Short description

Desktop:

- Timeline layout

Mobile:

- Vertical stepper

### Review Comment

Fields:

- Reviewer initials/name
- Status label
- Comment text
- Timestamp or state

Status colors:

- Confirmed: success
- Needs revision: warning
- Source needed: info
- Risk: danger

### Contact Form

Required:

- Name
- Email
- Organization
- Training topic

Optional:

- Budget range
- Timeline
- Source material status
- Review/reporting need

Validation:

- Inline errors
- Clear success state
- No silent submit failure

## Accessibility

Baseline: WCAG AA.

Requirements:

- All interactive elements keyboard accessible.
- Visible focus ring.
- Contrast ratio 4.5:1 for body text.
- Form fields have labels, not only placeholders.
- Error messages are text, not color-only.
- Workflow diagrams must have text equivalents.
- Icons are decorative unless they convey status; status must include text.

## Responsive Behavior

Breakpoints:

- Mobile: 0-639px
- Tablet: 640-1023px
- Desktop: 1024px+

Critical checks:

- Japanese headings must wrap cleanly.
- CTA buttons must not overflow.
- Cards must maintain stable dimensions.
- Workflow timeline must become vertical on mobile.
- Hero preview must not crowd the headline.

## Conversion Notes

The landing page should qualify serious B2B leads rather than maximize raw signups.

Do:

- Ask about training launch timing.
- Ask about existing materials.
- Ask whether review/reporting is required.
- Ask organization type.

Do not:

- Ask too many technical questions.
- Force account creation.
- Make users upload confidential documents in the first contact.

## First Version Acceptance Criteria

The first shipped landing page is acceptable if:

- A Japanese buyer can understand the offer within 10 seconds.
- The page clearly distinguishes training delivery workflow from slide generation.
- The contact form captures enough information to qualify a sales conversation.
- Review/governance is presented as a trust mechanism, not a separate abstract platform.
- The page works well on mobile and desktop.
- There are no claims of official certification endorsement or pass-rate guarantees.
