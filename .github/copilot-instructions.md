# AIMate Website - AI Agent Instructions

## Project Architecture

This is a **Next.js 16 Pages Router** website for AIMate mobile app, built with TypeScript, Tailwind CSS, and Sanity CMS as a headless backend. The project follows a component-driven architecture with strict separation of concerns.

### Core Stack & Patterns

- **Framework**: Next.js 16 with Pages Router (NOT App Router)
- **CMS**: Sanity headless CMS for all content management
- **Styling**: Tailwind CSS v4 with custom CSS variables for theming
- **Animation**: Motion (Framer Motion) with LazyMotion for performance
- **Components**: Radix UI primitives with shadcn/ui patterns

## Critical Development Patterns

### 1. Sanity Integration Pattern

All content comes from Sanity CMS. Follow this exact pattern:

```typescript
// GraphQL queries in /src/graphql/
export const HomeQuery = `*[_type == "home"][0]{...}`;

// Type definitions in /src/lib/types.ts
export type homeType = { seo: seoType; title: string; ... };

// Fetch in getStaticProps with revalidation
export async function getStaticProps() {
  const homeData = await SanityClient.fetch(HomeQuery);
  return { props: { homeData }, revalidate: REVALIDATE_TIME };
}
```

### 2. Component Animation Pattern

Use Motion with `useInView` for scroll-triggered animations:

```tsx
import { m, useInView } from "motion/react";

const ref = useRef(null);
const isInView = useInView(ref, { once: true, amount: 0.2 });

<m.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
```

### 3. Image Handling Pattern

Always use Sanity's `urlFor` utility for CMS images:

```tsx
import { urlFor } from "@/client/sanity-client";
import Image from "next/image";

<Image
  src={urlFor(item.avatar).url()}
  alt={item.name}
  width={50}
  height={50}
  className="rounded-full object-cover size-12"
/>;
```

### 4. Rich Text Content Pattern

Use `PortableContent` component for all Sanity rich text:

```tsx
import PortableContent from "../Richtext/PortableContent";
<PortableContent content={item.review} />;
```

## Project Structure Conventions

### Component Organization

- `/src/components/Home/` - Homepage-specific sections (BannerSection, ReviewSection, etc.)
- `/src/components/Layout/` - Site-wide layout components (Navbar, Footer, MainLayout)
- `/src/components/ui/` - Reusable UI primitives following shadcn/ui patterns
- `/src/icon/` - Custom SVG icon components

### Styling Conventions

- **Fonts**: Use `font-nohemi` for headings, `font-dm-sans` for body text
- **Colors**: Use CSS custom properties from `globals.css` (--background, --primary green color)
- **Shadows**: Use `card-sahdow` class for consistent card shadows
- **Responsive**: Mobile-first approach with `md:` breakpoints

### File Naming

- React components: PascalCase (e.g., `ReviewSection.tsx`)
- Utilities/configs: kebab-case (e.g., `sanity-client.ts`)
- GraphQL queries: PascalCase with "Query" suffix (e.g., `HomeQuery`)

## Key Development Commands

```bash
npm run dev              # Development server
npm run build           # Production build
npm run format          # Prettier formatting
npm run lint-fix        # ESLint auto-fix
npm run check-format    # Check formatting without fixing
npm run check-lint      # Check linting without fixing
```

## Critical Configuration Details

### Sanity Configuration

- Project ID: `kkeh9mch`
- Dataset: `production`
- API Version: `2025-10-21`
- CDN disabled (`useCdn: false`)

### Next.js Configuration

- Images configured for `cdn.sanity.io` domain
- Custom rewrite for `/robots.txt` → `/api/robots`
- React Strict Mode disabled
- Image formats: AVIF and WebP

### Performance Patterns

- Use `dynamic` imports for heavy components
- `LazyMotion` with `domAnimation` for animations
- `nextjs-toploader` for page transitions
- ISR with `REVALIDATE_TIME` constant (100 seconds)

## Content Management Workflow

1. All content is managed in Sanity CMS
2. Homepage uses comprehensive `HomeQuery` for all sections
3. Static pages use `StaticPageQuery` with slug-based routing
4. Navigation menus fetched via `NavQuery` and `FooterQuery`
5. SEO data integrated into all page types via `seoType`

## Common Gotchas

- Always wrap animations in `LazyMotion` provider (done in `MainLayout`)
- Use absolute imports with `@/` prefix
- Maintain consistent animation delays (0.2s increments)
- Follow the established type system - extend existing types rather than creating new ones
- All CMS content should be nullable/optional in TypeScript types
