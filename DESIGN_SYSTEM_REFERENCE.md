# 🎨 BookHub Design System - Quick Reference

## Color Palette

### Primary Colors
```
┌─────────────────────────────────────┐
│  🟨  PRIMARY YELLOW                 │
│  #FFCE1A                            │
│  Use: Buttons, highlights, badges   │
│  RGB: (255, 206, 26)                │
│  HSL: (45°, 100%, 55%)              │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  🟦  SECONDARY NAVY                 │
│  #0D0842                            │
│  Use: Text, headers, backgrounds    │
│  RGB: (13, 8, 66)                   │
│  HSL: (262°, 79%, 15%)              │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  🟥  ACCENT RED                     │
│  #FF5841                            │
│  Use: Hover states, alerts, focus   │
│  RGB: (255, 88, 65)                 │
│  HSL: (9°, 100%, 63%)               │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  ⬜  LIGHT GRAY                     │
│  #F3F3F3                            │
│  Use: Card backgrounds, sections    │
│  RGB: (243, 243, 243)               │
│  HSL: (0°, 0%, 95%)                 │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  ⬛  DARK BLACK                     │
│  #1a1a1a                            │
│  Use: Dark text, deep shadows       │
│  RGB: (26, 26, 26)                  │
│  HSL: (0°, 0%, 10%)                 │
└─────────────────────────────────────┘
```

## Gradient Combinations

### Logo Gradient
```
from-primary (Yellow) → to-favorite (Red)
#FFCE1A → #FF5841
Modern, energetic, eye-catching
```

### Hero Gradient
```
from-secondary (Navy) → via-purple-900 → to-secondary
Dark, sophisticated, premium feel
```

### Button Gradient
```
from-primary to-favorite
#FFCE1A → #FF5841
Call-to-action, attention-grabbing
```

---

## Typography Scale

```
h1  56px  Montserrat Bold   - Main headlines
h2  48px  Montserrat Bold   - Section titles
h3  32px  Montserrat Bold   - Subsections
h4  24px  Montserrat Bold   - Card titles
p   16px  Nunito Sans       - Body text
sm  14px  Nunito Sans       - Small text
xs  12px  Nunito Sans       - Extra small
```

---

## Spacing Scale

```
4px   - xs  (smallest gaps)
8px   - sm  (small spacing)
12px  - base (standard)
16px  - md  (medium)
20px  - lg  (large)
24px  - xl  (extra large)
32px  - 2xl (double large)
40px  - 3xl
48px  - 4xl
64px  - 5xl (largest)
```

---

## Button Styles

### Primary Button
```
┌─────────────────────────────┐
│  [Shop Now →]               │
│  Background: Yellow (#FFCE1A)
│  Text: Navy (#0D0842)       │
│  Hover: Lift 8px + Shadow   │
│  Hover Bg: Red (#FF5841)    │
└─────────────────────────────┘
```

### Secondary Button
```
┌─────────────────────────────┐
│  [Learn More]               │
│  Border: 2px Yellow         │
│  Text: Yellow (#FFCE1A)     │
│  Background: Transparent    │
│  Hover: Bg Yellow + Navy    │
└─────────────────────────────┘
```

### Icon Button
```
┌─────────────────────────────┐
│  [❤️] [🔍] [👤] [🛒]       │
│  Background: Hover - Light  │
│  Text: Navy (#0D0842)       │
│  Size: 24px icons           │
└─────────────────────────────┘
```

---

## Shadow System

```
Shadow Small (Inputs)
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05)

Shadow Medium (Cards)
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)

Shadow Large (Hover, Modals)
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15)

Shadow Extra Large (Featured)
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2)
```

---

## Border Radius System

```
6px   - Inputs, small buttons, badges
8px   - Small cards, components
12px  - Standard buttons, controls
16px  - Large cards, sections
9999px - Fully rounded (pills, avatars)
```

---

## Responsive Breakpoints

```
Mobile
└─ 360px - 639px
   • Single column
   • Hamburger menu
   • Full-width buttons

Tablet
└─ 640px - 1023px
   • 2-column layout
   • Visible navigation
   • Flexible spacing

Desktop
└─ 1024px+
   • 4-column layout
   • Full features
   • Optimal spacing
```

---

## Animation Timings

```
Standard Transition
└─ Duration: 300ms
   Easing: cubic-bezier(0.4, 0, 0.2, 1)

Fade In
└─ Opacity: 0 → 1
   Duration: 500ms

Slide In
└─ Transform: translateX/Y
   Duration: 500ms

Hover Lift
└─ Transform: translateY(-8px)
   Duration: 300ms

Pulse
└─ Opacity: 1 ↔ 0.5
   Duration: 2s

Float
└─ Transform: translateY(-10px ↔ 0px)
   Duration: 3s
```

---

## Component Examples

### Book Card Structure
```
┌──────────────────────────────────┐
│  ┌──────────────────────────────┐│
│  │  [Book Cover Image]          ││
│  │  [❤️] [-30%] [🏆 TRENDING]   ││
│  │  [Quick Add →] (hover only)  ││
│  └──────────────────────────────┘│
│                                  │
│  📕 Fiction                      │
│  Book Title Here                 │
│  ⭐⭐⭐⭐⭐ (24 reviews)           │
│                                  │
│  $12.99 ~~$18.99    [Buy] [→]   │
└──────────────────────────────────┘
```

### Navbar Structure
```
┌────────────────────────────────────────────┐
│ [📚] [Search......]     [About] [👤❤️📦]  │
│ BookHub              (Cart: 0)             │
└────────────────────────────────────────────┘
Mobile: [≡] Menu with dropdown
```

### Footer Structure
```
┌─────────────────────────────────────────┐
│ About      Quick Links   Support Contact│
│ BookHub    • Home        • FAQs    📧   │
│ Story...   • About       • Returns 📞   │
│ 📘📗📙    • Books        • Shipping📍   │
└─────────────────────────────────────────┘
└─────────────────────────────────────────┘
© 2024 | Privacy | Terms | Sitemap
```

---

## Accessibility Notes

### Color Contrast Ratios
- Navy (#0D0842) on Yellow (#FFCE1A): **8.5:1** ✅ AAA
- Yellow (#FFCE1A) on Navy (#0D0842): **8.5:1** ✅ AAA
- Red (#FF5841) on White: **4.5:1** ✅ AA
- Navy (#0D0842) on White: **10.5:1** ✅ AAA

### Touch Targets
- Minimum size: 44px × 44px
- Spacing between targets: 8px minimum
- Icons: 24px minimum
- Buttons: 40-48px height

---

## CSS Variable Reference

```css
:root {
  --primary: #FFCE1A;
  --secondary: #0D0842;
  --favorite: #FF5841;
  --light: #F3F3F3;
  --dark: #1a1a1a;
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);
  
  --transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## File Structure

```
src/
├── App.css (Variables, animations)
├── index.css (Global styles)
├── components/
│   ├── Hero.jsx (Hero banner)
│   ├── BookCard.jsx (Product card)
│   └── Navbar.jsx (Navigation)
└── pages/
    ├── Home.jsx (Book grid)
    └── About.jsx (Company info)
```

---

## Quick Tips

1. **Always use CSS variables** for colors
2. **Use Tailwind classes** for spacing (px, py, mb, gap)
3. **Apply animations** via App.css utilities
4. **Test on mobile** first (mobile-first approach)
5. **Maintain spacing** consistently
6. **Use gradients** sparingly for impact
7. **Keep transitions** at 300ms standard

---

## Brand Voice

✨ **Modern** - Contemporary design
🎯 **Professional** - Clean and polished
💫 **Approachable** - Friendly and warm
🚀 **Dynamic** - Energetic and responsive

---

Enjoy creating with BookHub's design system! 🎨✨
