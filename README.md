# Product Catalog (Single Page Application - SPA)

This project focuses on developing a **Single Page Application (SPA)** using **React.js** for a **product catalog**. The goal is to reinforce React knowledge and introduce key concepts like:

- Routing  
- Hooks  
- Loading spinners  
- Bootstrap styling  

The application simulates a real-world client project and must:

- Load product data from a server (API)  
- Display products as **cards**  
- Include a **search field** to filter products  
- Include a **category selector** for filtering  
- Allow navigation to a **product detail page** when a card is clicked

## Environment Requirements

To develop and run the application, ensure the following are installed:

- **Node.js** (v16 LTS)  
- **Git**  
- Code editor (Visual Studio Code or similar)  
- Basic knowledge of **HTML, CSS, JS, and React**

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Alejandro-Fdez-Gon/react-products.git
```

### 2. Enter the project directory

```bash
cd react-products
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

The application will be available at http://localhost:3000. Stop the server with Control + C.

## Application Structure and Component Design

Before coding, plan the application structure, component hierarchy, and responsibilities. The application uses **React Router** for:

- `/` – Main product search page  
- `/products/:productid` – Product detail page

## Product API

The application fetches product data from the **DummyJson Products API**:

- **API Documentation:** [https://dummyjson.com/docs/products](https://dummyjson.com/docs/products)  
- **Endpoint:** `https://dummyjson.com/products`

For development purposes, a **mock data file** is included in `src/constants` so you can test the application with controlled data before integrating the real API calls.

## Application Configuration

The project includes a configuration file at `src/config/config.js`. This file exports initial variables that control application behavior:

- `use_server` – Determines whether to fetch data from the API or use mock data  
- `server_url` – API endpoint to fetch products  

Review and adjust these variables as needed to configure the application for development or testing.

## Application Features

The SPA should include the following features:

1. **Search Functionality:** Users can search for products using a search bar.  
2. **Category Filtering:** Users can filter products by category using a dropdown selector.  
3. **Product Cards:** Each product is displayed in a card with an image, title, and price.  
4. **Product Detail Page:** Clicking a card navigates to `/products/:productid`, showing detailed information about the product.  
5. **Loading Spinner:** Show a spinner while data is being fetched.  
6. **Responsive Design:** The UI should adapt to desktop and mobile screen sizes using Bootstrap.
