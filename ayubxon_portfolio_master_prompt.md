# MASTER PROMPT — AYUBXON MURODOV | HYBRID PREMIUM DEVELOPER PORTFOLIO

## 1. ROLE AND MISSION

You are a Senior Software Architect, Senior Frontend Engineer, UI/UX Designer, Motion Designer, Accessibility Specialist, SEO Engineer, and QA Engineer.

Your mission is to design, implement, test, and deliver a production-quality personal developer portfolio for Ayubxon Murodov.

This is not a generic portfolio template. Build a distinctive, premium, bilingual portfolio that combines minimal design, sophisticated interactions, and subtle AI-inspired visual elements.

You must work directly in the existing AI CLI environment. Inspect the repository, make appropriate decisions, create and modify files, install compatible dependencies when necessary, run the project, execute available checks, fix errors, and deliver a functioning result.

Do not stop after writing a plan. Do not provide only example snippets. Implement the actual project.

**Primary objective:** Create a fast, responsive, accessible, visually memorable portfolio that accurately represents Ayubxon as a developer interested in AI agents, Telegram bots, web development, and practical business automation.

## 2. OWNER PROFILE AND VERIFIED INFORMATION

Use the following information as the source of truth.

- **Full name:** Ayubxon Murodov
- **Age:** 14

Professional interests:
- AI Agent Development
- Telegram Bot Development
- Web Development
- AI integrations and business automation
- Building practical software products

Project initiative:

Ayubxon has started developing a website with an AI-powered system for supermarkets.

Describe this as a project initiative or work in progress unless its completion is verified. Do not invent specific AI capabilities, business results, users, customers, revenue, awards, or performance metrics.

Public contact information:
- **Telegram username:** @AyubxonMurodov
- **Telegram URL:** https://t.me/AyubxonMurodov
- **Phone number:** +998 88 737 57 59
- **Telephone URL:** `tel:+998887375759`

Use these facts consistently throughout the site.

Do not invent a surname expansion, company, professional certification, work history, or technical expertise that has not been provided.

Create a single editable profile data file so the owner can update personal information without searching through every component.

## 3. DESIGN DIRECTION — HYBRID PREMIUM

Combine three visual principles:

1. **Minimal premium design:** generous whitespace, clear typography, restrained colors, and carefully structured layouts.
2. **AI-inspired technology:** subtle network patterns, code-inspired visuals, abstract nodes, and understated digital motion.
3. **Editorial portfolio design:** strong typography, large project previews, meaningful section transitions, and carefully composed content.

The result must feel custom-designed rather than generated from a common portfolio template.

### Visual identity

Use:
- Deep graphite and near-black as the primary dark theme.
- Soft white and warm-neutral backgrounds in light mode.
- A restrained electric blue or cyan accent.
- Optional subtle violet gradients for selected visual details.
- Thin borders, controlled shadows, and refined surfaces.
- Large but readable headings.
- Consistent spacing and alignment.
- High-quality responsive project cards.

Avoid:
- Excessive neon.
- Constant glowing effects.
- Too many gradients.
- Unnecessary glassmorphism on every component.
- Giant rounded cards everywhere.
- Fake terminal windows that serve no purpose.
- Excessive floating particles.
- Generic stock photography.
- Emoji-based substitutes for a coherent icon system.
- Fake statistics, fake reviews, and fake client logos.

The overall aesthetic should be calm, sophisticated, technical, and confident.

### Typography

Choose a modern, highly readable font system that supports Uzbek Latin characters and English.

Use a suitable local or properly loaded font, with sensible system fallbacks.

Establish a consistent typography scale for:
- Hero headline.
- Section headings.
- Body text.
- Project titles.
- Captions and metadata.
- Buttons and navigation.

Prevent clipping, awkward line breaks, and oversized text on small screens.

## 4. TECHNOLOGY STACK

Use the following stack unless the existing repository requires a justified alternative:

- React
- Vite
- TypeScript
- Tailwind CSS
- Motion for React (`motion`) or a compatible Framer Motion version
- Lucide React for icons

Choose compatible package versions based on the current repository and installed runtime.

Do not install duplicate animation libraries or unnecessary UI frameworks.

Use npm if the repository already uses npm. Preserve an existing package manager and lockfile where applicable.

### Architecture principles

- Component-based architecture.
- Strong TypeScript types.
- Reusable UI components.
- Centralized content data.
- Centralized translations.
- Small, focused components.
- Semantic HTML.
- Clear separation of presentation and application logic.
- Minimal dependencies.
- Maintainable CSS.
- No monolithic App component.
- No unnecessary backend.

A static portfolio does not require a backend by default. Do not add authentication, a database, an admin dashboard, or a server unless an implemented feature genuinely requires one.

## 5. BILINGUAL INTERNATIONALIZATION

The website must support two complete interface languages:

- Uzbek: `uz`
- English: `en`

Uzbek is the default language for first-time visitors.

Provide a visible language selector in the desktop navigation and mobile menu.

Suggested presentation: `UZ | EN`.

### Translation requirements

Translate all user-facing content, including:
- Navigation labels.
- Hero headline and description.
- About section.
- Skill categories.
- Project descriptions.
- Project status labels.
- Approach/process section.
- Contact section.
- Buttons and links.
- Form validation messages, if any.
- Empty states and accessibility labels.
- Footer.
- Page title and SEO metadata.

Do not translate code identifiers, URLs, technology names, or project names unnecessarily.

Use a centralized translation structure, such as:

`src/i18n/translations.ts`

Use a typed translation dictionary and a small reusable translation hook or context.

Avoid scattering language ternaries throughout every component.

Changing the language must update the entire interface without a full-page reload.

Persist the selected language in localStorage. On initial load, restore the saved language when valid; otherwise use Uzbek.

Do not introduce hydration problems or a visible flash of the wrong language.

If separate language routes are used, preserve the selected section and implement correct language navigation. Do not add routing complexity without a clear benefit.

### Language quality

Uzbek copy must sound natural and professional, not like a literal machine translation.

English copy must be concise, natural, and suitable for a developer portfolio.

## 6. INFORMATION ARCHITECTURE

Build a polished single-page portfolio with the following sections.

### A. Navigation

Include:
- Ayubxon Murodov wordmark.
- Home.
- About.
- Skills.
- Projects.
- Contact.
- Language selector.
- Theme toggle.
- Mobile navigation.

Navigation must scroll to the correct sections.

Use a subtle sticky or fixed header with an appropriate background treatment after scrolling.

Implement:
- Active section indication.
- Smooth anchor navigation.
- Correct anchor offsets.
- Keyboard-accessible mobile menu.
- Escape-key support where appropriate.
- Focus management when opening or closing the mobile menu.

Avoid navigation flicker and overlapping content.

### B. Hero section

This is the most important visual section.

Suggested Uzbek headline:

> AI va Web texnologiyalar orqali real muammolarga yechim yarataman.

Suggested English headline:

> I build solutions to real-world problems with AI and web technologies.

Supporting Uzbek text:

> Men Ayubxon Murodov — AI agentlar, Telegram botlar va zamonaviy veb-ilovalar yaratishga qiziquvchi dasturchiman.

Supporting English text:

> I’m Ayubxon Murodov, a developer focused on AI agents, Telegram bots, and modern web applications.

Primary CTA:
- Uzbek: “Loyihalarimni ko‘rish”
- English: “Explore my projects”

Secondary CTA:
- Uzbek: “Bog‘lanish”
- English: “Get in touch”

Add a restrained visual composition containing:
- A code-inspired panel or abstract technical illustration.
- A subtle animated network or connected nodes.
- Carefully placed technology labels.
- A visual element that gives the hero its own identity.

Do not make the entire hero look like a fake terminal or dashboard.

Use strong typography, generous whitespace, and a carefully balanced text-to-visual ratio.

All CTA buttons must work.

### C. About section

Section title:
- Uzbek: “Men haqimda”
- English: “About me”

Explain that Ayubxon is a young developer interested in creating practical software using AI, bots, and web technologies.

Focus on:
- Curiosity.
- Learning through practical projects.
- Problem-solving.
- Building useful digital products.
- Exploring AI-driven business automation.

Mention the age only where appropriate. Do not make the entire portfolio feel like a school profile.

Use a clear layout with short paragraphs, an optional visual accent, and subtle entrance animation.

Do not invent a personal biography beyond the provided facts.

### D. Skills section

Group technologies and areas of interest into clearly defined categories.

**Frontend:**
- HTML
- CSS
- JavaScript
- Tailwind CSS
- React

**AI and automation:**
- AI agents
- AI API integration
- Workflow automation

**Bot development:**
- Telegram bots
- Telegram API integration

**Software development:**
- API integration
- Frontend/backend integration
- Practical application development

Represent AI and automation items as areas of interest or experience according to what is actually known.

Do not claim proficiency in TypeScript, Node.js, databases, or other technologies as established facts unless verified from the repository or explicitly confirmed by the owner.

It is acceptable to use TypeScript to build this portfolio without claiming that it is already one of the owner's established professional skills.

Use attractive skill cards, labels, and icons. Avoid fabricated proficiency percentages, fake certification badges, and arbitrary progress bars.

Store skills in a central data file.

### E. Projects section

This section must be visually prominent.

Start with the known project initiative:

**Project name:** AI Supermarket System

Uzbek description:

> Supermarket jarayonlarini raqamli boshqarish va AI imkoniyatlarini biznes ehtiyojlariga moslashtirishga qaratilgan loyiha.

English description:

> A project focused on digital supermarket operations and exploring how AI can support practical business needs.

Show the project's real status. Use “In progress” only when it is still being developed.

Display:
- Project name.
- Short description.
- Actual technologies used, once verified.
- Project status.
- A meaningful visual preview.
- A details action.
- A live demo link only if a real demo URL exists.
- A source-code link only if a real repository URL exists.

Do not fabricate external links.

When no live preview or screenshot is available, create a polished, clearly illustrative CSS-based visual or use an actual project screenshot if supplied.

Make the project card interactive:
- Subtle hover elevation.
- Image or preview movement where appropriate.
- Clear focus states.
- Smooth transition into the project details view.

Project details may use an accessible modal or a dedicated section.

Ensure modal behavior includes Escape-key support, sensible focus management, and a clear close button.

Use a central projects data file so new projects can be added without rewriting section components.

Do not invent additional completed projects.

### F. Development approach

Present a five-step visual process:

1. Understand the problem.
2. Plan the solution.
3. Design and develop.
4. Integrate APIs or AI where appropriate.
5. Test, refine, and improve.

Translate the entire section into both languages.

Use a restrained timeline or numbered layout with subtle scroll animations.

Present this as a development approach, not as proof of unverified client work.

### G. Contact section

Uzbek heading:

> Keling, foydali loyiha yaratamiz.

English heading:

> Let’s build something useful.

Supporting copy should invite people to discuss AI agents, Telegram bots, and web development projects.

Provide:
- Telegram contact button.
- Phone contact button.
- Copy-to-clipboard action for contact information.
- Clear success or failure feedback for copy actions.

Use the real contact values provided in the profile configuration.

Telegram URL: `https://t.me/AyubxonMurodov`

Telephone URL: `tel:+998887375759`

If a contact form is added, it must have a genuine delivery mechanism and proper validation. Do not simulate a successful message submission without sending or storing the message.

A contact form is optional; working direct contact links are more important than an unconfigured form.

The phone number is intended for public display in this version, but keep it configurable so the owner can remove it later if desired.

### H. Footer

Include:
- Ayubxon Murodov.
- Short developer description.
- Internal navigation links.
- Telegram link.
- Current year generated dynamically.
- A restrained visual separator.

Translate all interface text.

Do not add fake company affiliations, awards, or social links.

## 7. PREMIUM MOTION SYSTEM

Use Motion for React or a compatible existing motion library.

Create a coherent animation system with shared timing and easing conventions.

### Hero motion

- Headline enters with a subtle stagger.
- Supporting text fades in naturally.
- CTA buttons appear with a short delay.
- Abstract visual elements move slowly and unobtrusively.

### Scroll motion

- Sections reveal as they enter the viewport.
- Project cards animate in a controlled sequence.
- The process timeline reveals progressively.
- Use viewport-based triggers to avoid unnecessary off-screen animation work.

### Micro-interactions

- Buttons have restrained hover and tap feedback.
- Cards lift slightly on hover.
- Icons respond subtly to interaction.
- Theme and language controls transition smoothly.
- Interactive elements have visible keyboard focus.

### Performance and accessibility

- Respect `prefers-reduced-motion`.
- Do not animate every element.
- Avoid continuous animations that waste battery or CPU.
- Avoid layout shifts.
- Prefer transform and opacity animations.
- Do not interfere with scrolling or clicking.
- Ensure animations do not make content unreadable.
- Keep mobile performance in mind.

Motion should support the design, not compete with it.

## 8. DARK AND LIGHT THEMES

Dark mode is the default visual direction.

Implement a complete light theme with appropriate:
- Background colors.
- Text colors.
- Borders.
- Card surfaces.
- Shadows.
- Accent colors.
- Hover states.
- Focus indicators.

Theme switching must update the whole website consistently.

Persist the user's preference in localStorage.

Prevent an unnecessary flash of the wrong theme on reload.

Ensure both themes maintain readable contrast and a premium visual appearance.

## 9. RESPONSIVE DESIGN

Support:
- Small mobile screens from 320px.
- Modern smartphones.
- Tablets.
- Laptops.
- Desktop displays.
- Large monitors.

Requirements:
- No horizontal overflow.
- No clipped text.
- No overlapping sections.
- Correct mobile navigation.
- Appropriate image scaling.
- Responsive typography.
- Touch-friendly controls.
- Sensible grid changes at breakpoints.
- No hover-only essential functionality.
- Animations optimized for mobile devices.

Use a consistent spacing scale and responsive layout rules.

Test the actual rendered page at multiple viewport sizes when browser or preview tools are available.

## 10. RECOMMENDED PROJECT STRUCTURE

Adapt this structure to the actual repository instead of blindly overwriting existing files.

```text
src/
  app/
    App.tsx
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      MobileMenu.tsx
      ThemeToggle.tsx
      LanguageSwitcher.tsx
    sections/
      Hero.tsx
      About.tsx
      Skills.tsx
      Projects.tsx
      Approach.tsx
      Contact.tsx
    ui/
      Button.tsx
      SectionHeading.tsx
      ProjectCard.tsx
      ProjectDetails.tsx
      Reveal.tsx
  context/
    LanguageContext.tsx
    ThemeContext.tsx
  data/
    profile.ts
    skills.ts
    projects.ts
  i18n/
    translations.ts
  hooks/
  lib/
  styles/
    index.css
  main.tsx
```

Keep the structure proportional to the project's actual complexity. Avoid creating empty files or unnecessary abstractions.

## 11. SEO AND SOCIAL SHARING

Implement:
- Semantic HTML5.
- A meaningful page title.
- A unique meta description.
- UTF-8 charset.
- Responsive viewport metadata.
- Open Graph metadata.
- Appropriate favicon.
- Clear heading hierarchy.
- Descriptive links.
- Correct language metadata.
- Useful alt text for meaningful images.
- A sensible robots.txt.
- A sitemap when appropriate.

Update the document language attribute when the selected language changes.

Translate the page title and meta description when appropriate.

Do not invent a production domain. If the domain is unknown, keep URL-dependent metadata configurable and document what must be changed before deployment.

Avoid misleading structured data and unverified claims.

## 12. ACCESSIBILITY

Follow practical WCAG accessibility principles.

Ensure:
- Semantic landmarks.
- Correct heading hierarchy.
- Keyboard-accessible navigation.
- Visible focus states.
- Sufficient color contrast.
- Accessible labels for icon-only buttons.
- Proper button and link semantics.
- Accessible modal behavior.
- Reduced-motion support.
- Screen-reader-friendly status feedback.
- Language changes are communicated appropriately.
- Interactive elements have meaningful accessible names.

Do not use clickable `div` elements when semantic buttons or links are appropriate.

## 13. PERFORMANCE AND CODE QUALITY

Prioritize fast initial rendering and smooth interaction.

Requirements:
- Avoid unnecessary dependencies.
- Avoid unnecessary component re-renders.
- Use appropriate React state management.
- Optimize images.
- Lazy-load noncritical media where appropriate.
- Avoid excessive JavaScript for purely decorative effects.
- Avoid layout shifts.
- Use CSS variables or a consistent token system.
- Remove dead code and unused imports.
- Keep the browser console free of application errors.
- Keep the TypeScript compiler free of relevant errors.
- Never commit secrets or API keys.
- Never expose private environment variables to client-side code.

Do not add a backend, database, authentication, or AI API integration solely to make the portfolio appear more sophisticated.

The portfolio itself must work without requiring an AI API key.

## 14. FUNCTIONAL REQUIREMENTS

Before considering the implementation complete, verify the following:

1. The application starts using the documented command.
2. The page renders without runtime errors.
3. All sections are present.
4. Navigation links reach the correct sections.
5. The mobile menu opens and closes correctly.
6. Uzbek is the default language for a first-time visitor.
7. English translation covers every user-facing section.
8. Changing language updates all relevant text.
9. The selected language persists after reload.
10. Light and dark themes both work.
11. The selected theme persists after reload.
12. Project cards display the correct data.
13. Missing project URLs do not produce fake working buttons.
14. Telegram links open the correct account.
15. The phone action uses the correct telephone URL.
16. Clipboard functionality works where browser permissions allow it.
17. Copy feedback is accurate.
18. Animations do not block navigation or interaction.
19. Reduced-motion preferences are respected.
20. The layout works on mobile, tablet, and desktop.
21. The production build completes successfully.
22. Available automated tests pass.

If browser automation is available, perform a real interaction test. Otherwise, run the strongest checks available in the environment and clearly identify any unverified browser behavior.

## 15. EXECUTION WORKFLOW

Follow this workflow in order.

### Phase 1 — Repository inspection

- Inspect the working directory.
- Read package.json and existing configuration.
- Identify the installed framework and dependencies.
- Inspect existing source files before making changes.
- Preserve existing useful work.
- Identify any constraints imposed by the current AI CLI environment.

### Phase 2 — Implementation planning

- Create a concise technical implementation plan.
- Identify the major components.
- Establish design tokens and typography.
- Define the translation structure.
- Decide how theme and language persistence will work.
- Identify the minimal dependency set.

Do not stop for approval after planning unless a genuinely blocking decision or destructive operation requires confirmation.

### Phase 3 — Build the foundation

- Configure the application if needed.
- Create the global layout.
- Implement the theme system.
- Implement the language system.
- Create reusable components.
- Establish responsive design tokens.

### Phase 4 — Implement the portfolio

- Build the navigation.
- Build the hero.
- Build the about section.
- Build skills.
- Build projects.
- Build the development approach section.
- Build contact.
- Build the footer.

Ensure all visible content is localized.

### Phase 5 — Polish

- Add motion.
- Refine spacing and typography.
- Improve mobile layouts.
- Add hover, focus, and active states.
- Verify theme consistency.
- Add SEO metadata.
- Add accessibility improvements.

### Phase 6 — Test and fix

Run the project's available commands for:
- Type checking.
- Linting.
- Automated tests.
- Production build.

Use the commands actually defined in package.json.

Fix errors caused by the implementation. Do not hide errors by disabling type checking, suppressing meaningful warnings, or removing useful tests.

If an external dependency or unavailable service prevents a check, explain that limitation rather than claiming it passed.

### Phase 7 — Final delivery

At completion, provide a concise report containing:

1. What was implemented.
2. The main files and architecture.
3. The available working features.
4. The exact commands used to test the project.
5. The test and build results.
6. How to start the development server.
7. How to build for production.
8. Any remaining configuration or deployment steps.

The final report must reflect what was actually completed, not what was merely planned.

## 16. DEFINITION OF DONE

The project is complete only when it has:

- A distinctive Hybrid Premium design.
- A complete Uzbek/English language system.
- Working light and dark themes.
- Responsive layouts.
- Carefully implemented motion.
- Reusable and maintainable React components.
- Accurate owner information.
- A project section based on real information.
- Functional Telegram and telephone links.
- Accessibility fundamentals.
- SEO foundations.
- No known implementation-related build errors.
- Clear setup and delivery documentation.

Do not sacrifice functional correctness for visual effects.

Do not claim a feature is working unless it has been implemented and appropriately verified.

Start by inspecting the current repository, then implement the complete portfolio. Work autonomously, make sensible engineering decisions, and continue until the defined acceptance criteria have been met or a genuine environmental blocker prevents further progress.
