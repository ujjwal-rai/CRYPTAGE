---

# Cryptocurrency Tracker App - CRYPTAGE

This project is a cryptocurrency tracker app built with React using Vite as the build tool. It allows users to track real-time cryptocurrency prices, display a price chart, and view important metrics such as market cap, 24-hour price changes, and market rank. The app integrates data from the CoinGecko API and features a search bar for individual currency lookup.

### Visit the Live Website

You can visit the live version of the app here:  
[CRYPTAGE - Cryptocurrency Tracker](https://ujjwal-rai.github.io/CRYPTAGE/)

## Features

- Real-time cryptocurrency data fetching from CoinGecko API.
- Displays price charts, current price, market cap, 24-hour price changes, and market rank.
- Search functionality for individual currencies.
- Trained model output and user suggestions.
- Visual report generation with graphs.

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

## Installation

Follow these steps to set up and run the project on your local machine:

### Step 1: Create a Vite Project

1. Open your terminal and run the following command to create a Vite project:
   ```bash
   npm create vite@latest
   ```

2. When prompted, select the following options:
   - **Framework**: React
   - **Variant**: JavaScript

### Step 2: Install Dependencies

Once the Vite project is created, navigate to your project directory and install the necessary dependencies.

1. Install all base dependencies:
   ```bash
   npm install
   ```

2. Install React Router DOM for routing:
   ```bash
   npm install react-router-dom
   ```

3. Install `react-google-charts` to visualize the price data:
   ```bash
   npm install react-google-charts
   ```

### Step 3: Run the Development Server

To run the project and host the website locally:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and go to `http://localhost:3000` to view the app.

## How to Host the Website on GitHub Pages

To host this Vite-based React app on GitHub Pages for free, follow these steps:

### Step 1: Install GitHub Pages Package

In the terminal, install the `gh-pages` package as a development dependency:
```bash
npm install gh-pages --save-dev
```

### Step 2: Update `package.json`

1. Open the `package.json` file and add the following `homepage` field. Replace `your-username` and `your-repo-name` with your actual GitHub username and repository name:
   ```json
   "homepage": "https://your-username.github.io/your-repo-name"
   ```

2. Add the following `scripts` to the `package.json`:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

### Step 3: Deploy the App

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   ```

2. **Push to GitHub**:
   ```bash
   git push origin main
   ```

3. **Deploy to GitHub Pages** by running:
   ```bash
   npm run deploy
   ```

   This command will build the project and push the contents of the `dist` folder to the `gh-pages` branch.

### Step 4: Enable GitHub Pages

1. Go to the **Settings** tab of your repository.
2. Scroll down to the **Pages** section.
3. In the **Source** section, select the `gh-pages` branch and save.

Your site should now be live at `https://your-username.github.io/your-repo-name`.

## Project Structure

- **React Framework**: The app is built using React, which is fast and efficient for building dynamic user interfaces.
- **Vite**: Vite is used as the build tool, providing Hot Module Replacement (HMR) and faster development.
- **Routing**: React Router DOM is used to manage navigation between different pages in the app.
- **Charts**: Google Charts library is integrated for data visualization, providing clear and interactive price charts.


---
