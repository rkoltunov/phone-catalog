# **React Product Catalog**

[**Demo Link**](https://rkoltunov.github.io/phone-catalog/)

**Design Variants:**

[**Rounded Blue**](https://www.figma.com/design/FRxncC4lfyhs6og1L6FGEU/Phone-catalog--V2--Rounded-Style-2?node-id=0-1&p=f&t=15o13nsHHo2iYM4d-0)

[**Dark**](https://www.figma.com/design/BUusqCIMAWALqfBahnyIiH/Phone-catalog--V2--Original-Dark?node-id=0-1&p=f&t=FP2riZu1Uzxz1nCg-0)

---

## **Project Overview**

This project is a full-featured e-commerce catalog built with **React**. It includes product browsing, shopping cart, and favorites functionality. The application is built from scratch using modular architecture, modern tools, and a flexible UI based on multiple design themes.

---

## **Key Features**

- Product catalog with categories: Phones, Tablets, Accessories
- Product details page with full specifications and related products
- Shopping cart with quantity management, total calculation, and persistent state
- Favorites functionality with persistent state
- Sorting, filtering, and pagination with URL support
- Responsive image sliders and category banners
- Sticky header with navigation, cart and favorites icons
- Footer with GitHub link and Back to Top button
- 404 Not Found and Product Not Found error pages
- Optional: Theme switching, internationalization, skeleton loaders, search with debounce

---

## **Technologies Used**

- React with TypeScript
- CSS Modules / SCSS
- React Router
- Context API or Redux
- localStorage
- ESLint, Prettier, Husky
- Deployment via GitHub Pages / Vercel

---

## **Setup Instructions**

```bash
# 1. Clone the repository
git clone https://github.com/your-username/react-product-catalog.git

# 2. Navigate to the project directory
cd react-product-catalog

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

### 💡 Tools Configuration
- ESLint and Prettier for code quality
- Husky for pre-commit checks
- Auto deployment via CI/CD (e.g., GitHub Actions, Vercel)

---

## **Search and Filtering**
- Real-time search with debounce
- Filtering via `?query=value` in URL
- Sorting: Newest, Alphabetically, Cheapest
- Pagination via `?page=X&perPage=Y`

---

## **Cart & Favorites Functionality**
- State managed via React Context / Redux
- Persistent data via localStorage
- Update quantities, remove items, and calculate totals in Cart
- Toggle favorites using heart icon

---

## **Image and Slider Behavior**
- Custom `PicturesSlider` for homepage banners (auto-switch every 5 seconds)
- `ProductsSlider` for Hot Prices and Brand New sections
- Smooth hover transitions with scale effect

---

## **Error & Empty States**
- NotFoundPage for unknown routes
- Product Not Found for invalid product IDs
- Graceful handling of loading and error states with fallback UI

---

## **Advanced Features (Optional)**
- 🎨 Theme switching (light/dark, color themes)
- 🦴 Skeleton loaders during API fetch
