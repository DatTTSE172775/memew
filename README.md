# MEMEW - Monorepo với Theme System

Dự án monorepo sử dụng Turborepo với hệ màu MEMEW, hỗ trợ cả Next.js và Vite, sử dụng shadcn UI components và Tailwind CSS v4.

## 🎨 Theme System

### Hệ màu MEMEW

- **Primary**: Orange (#FF914D) - Màu chủ đạo
- **Secondary**: Purple (#6A0DAD) - Màu phụ
- **Accent**: Light Purple (#EEDBFF) - Màu nhấn
- **Semantic**: Success, Warning, Info, Destructive
- **Dark Mode**: Hỗ trợ đầy đủ với `[data-theme="dark"]`

### Tính năng Theme

- ✅ CSS Variables với HSL format
- ✅ Tailwind CSS v4 integration
- ✅ Dark/Light mode toggle
- ✅ Responsive design
- ✅ Custom component utilities

## 🏗️ Cấu trúc Dự án

```
memew/
├── apps/
│   ├── web/                 # Next.js App (App Router)
│   │   ├── src/app/         # Pages & Layouts
│   │   ├── src/components/  # UI Components
│   │   └── globals.css      # MEMEW Theme CSS
│   └── admin/               # Vite React App
│       ├── src/             # Source code
│       └── index.css        # MEMEW Theme CSS
├── packages/
│   ├── eslint-config/       # ESLint configurations
│   └── typescript-config/   # TypeScript configs
└── turbo.json               # Turborepo configuration
```

## 🚀 Cài đặt & Chạy

### Prerequisites

- Node.js 18+
- npm

### Cài đặt dependencies

```bash
# Root level
npm install

# Hoặc từng app riêng
cd apps/web && npm install
cd apps/admin && npm install
```

### Chạy Development

#### Chạy tất cả apps

````bash
# Root level
npm run dev

#### Chạy app cụ thể

```bash
# Web app (Next.js)
npm run dev --filter=web

# Admin app (Vite)
npm run dev --filter=admin

### Build

```bash
# Build tất cả
npm build

# Build app cụ thể
npm build --filter=web
npm build --filter=admin
```

## 🌐 Truy cập Apps

### Web App (Next.js)

- **URL**: `http://localhost:3000`

### Admin App (Vite)

- **URL**: `http://localhost:5173`

## 🎯 Components & Utilities

### shadcn UI Components

- **Buttons**: Primary, Secondary, Destructive, Outline, Ghost
- **Forms**: Input, Label, Card
- **Feedback**: Alert, Badge
- **Layout**: Card, CardHeader, CardContent, CardTitle

### Custom Utilities (MEMEW Theme)

```css
/* Button utilities */
.btn .btn-primary .btn-secondary .btn-outline .btn-destructive

/* Form utilities */
.form-control

/* Alert utilities */
.alert .alert-error .alert-success .alert-info

/* Badge utilities */
.badge .badge-success .badge-warning .badge-info
```

## 🎨 Theme Configuration

### CSS Variables Structure

```css
@theme {
  --color-primary: hsl(var(--primary));
  --color-secondary: hsl(var(--secondary));
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  /* ... */
}

:root {
  --primary: 24 100% 65%; /* #FF914D */
  --secondary: 277 87% 36%; /* #6A0DAD */
  --background: 0 0% 100%; /* #FFFFFF */
  --foreground: 0 0% 10%; /* #1A1A1A */
}

[data-theme="dark"] {
  --background: 220 27% 10%; /* #111827 */
  --foreground: 0 0% 96%; /* #F5F5F5 */
  /* ... */
}
```

### Sử dụng trong Components

```tsx
// Tailwind utilities
<div className="bg-primary text-primary-foreground">
  Primary Background
</div>

// Custom utilities
<button className="btn btn-primary">Custom Button</button>
<input className="form-control" placeholder="Input" />
```

## 🔧 Development

### Cấu hình Tailwind CSS v4

- **Config-in-CSS**: Sử dụng `@theme` thay vì `tailwind.config.js`
- **CSS Variables**: Tất cả colors được định nghĩa qua CSS variables
- **Dark Mode**: `[data-theme="dark"]` attribute

### Cấu hình Turborepo

- **Caching**: Local và remote caching
- **Parallel builds**: Build nhiều apps cùng lúc
- **Dependencies**: Quản lý dependencies giữa packages

### Scripts có sẵn

```json
{
  "dev": "turbo dev",
  "build": "turbo build",
  "lint": "turbo lint",
  "clean": "turbo clean"
}
```

## 📱 Responsive Design

### Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

### Grid System

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid */}
</div>
```

## 🚀 Deployment

### Web App (Next.js)

```bash
cd apps/web
npm build
npm start
```

### Admin App (Vite)

```bash
cd apps/admin
npm build
npm preview
```

### Environment Variables

```bash
# Web app
cp apps/web/.env.example apps/web/.env.local

# Admin app
cp apps/admin/.env.example apps/admin/.env.local
```

## 🤝 Contributing

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Config từ `packages/eslint-config`
- **Prettier**: Code formatting tự động

### Commit Convention

```bash
feat: add new theme component
fix: resolve dark mode toggle issue
docs: update README with theme info
style: format CSS variables
```

## 📚 Resources

### Documentation

- [Turborepo Docs](https://turborepo.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Vite Docs](https://vitejs.dev/guide)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

### Theme Colors Reference

- **Primary**: `#FF914D` (Orange)
- **Secondary**: `#6A0DAD` (Purple)
- **Accent**: `#EEDBFF` (Light Purple)
- **Success**: `#10B981` (Green)
- **Warning**: `#F59E0B` (Yellow)
- **Info**: `#3B82F6` (Blue)
- **Destructive**: `#EF4444` (Red)

## 📄 License

MIT License - Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

---

**MEMEW Theme System** - Hệ màu nhất quán cho toàn bộ monorepo 🎨✨
````
