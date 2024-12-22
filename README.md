# Rick and Morty Character Explorer

An interactive web application that allows users to explore, filter, and visualize character data from the *Rick and Morty* universe. This project is built using **React** and leverages the **Rick and Morty API** to retrieve character information. It includes features such as search, filters, and data visualization through charts.

## Features

- **Search Characters by Name**: Easily find characters using the search bar.
- **Filter by Status and Species**: Filter characters based on their status (e.g., alive, dead) and species.
- **Interactive Character Cards**: View character details with animated transitions and hover effects.
- **Data Visualization**: View charts displaying the distribution of species, status, and gender.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for fast and flexible styling.
- **Framer Motion**: A popular animation library to add smooth animations and transitions.
- **Recharts**: A charting library for rendering interactive charts and data visualizations.
- **Axios**: A promise-based HTTP client for making API requests.
- **Vite**: A fast and modern build tool for React applications.

## Live Demo

You can view the live demo of the application at the following link:  
[Live Demo](https://pinkylml.github.io/Rick-Morty/)

## Challenges and Solutions

1. **Tailwind CSS Integration**
   - **Challenge**: Initial configuration issues with PostCSS and setting up the correct environment for Tailwind.
   - **Solution**: Updated configuration files to use ESM format and resolved dependencies, ensuring Tailwind worked seamlessly.

2. **Data Visualization**
   - **Challenge**: Effectively representing character statistics (such as species, status, and gender) in a visually appealing manner.
   - **Solution**: Integrated **Recharts** to create interactive pie, bar, and radial charts that allow users to visualize character distributions dynamically.

3. **Responsive Design**
   - **Challenge**: Ensuring the application is fully functional on different screen sizes (mobile, tablet, desktop).
   - **Solution**: Leveraged **Tailwind CSS's responsive utilities** to create a layout that adjusts smoothly across various devices.



