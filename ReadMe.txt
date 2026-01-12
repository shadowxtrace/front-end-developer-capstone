Project Overview

    - Project name: Little Lemon – Table Reservation App
    - What it does: A React app that allows users to browse the homepage and book a table using a reservation form.
    - Key feature: Available booking times update based on the selected date (state managed with a reducer).
    - Pages included: Home, Booking, Confirmation (plus placeholder routes for About/Menu/Order/Login).

Tech Stack

    - React (components, state, hooks)
    - React Router (page routing)
    - Reducer pattern (useReducer) for booking times
    - CSS (Little Lemon color theme + responsive layout)

How to Run This Project (Setup Instructions)

    - Step 1: Download or clone the project
        - git clone <your-repo-url>
    - Step 2: Go into the project folder
        - cd <project-folder>
    - Step 3: Install dependencies
        - npm install
    - Step 4: Start the development server
        - npm start 
    - Step 5: Open in browser 
    - Go to: http://localhost:3000

How to Use the App

    - Home page: Displays the hero section, specials, testimonials, and about section.
    - Booking page: Go to Reservations in the nav or click Reserve a Table.
    - Form behavior:
        - Select a date → dispatches an action to update available times
         Select a time, guests, and occasion
        - Submit → navigates to /confirmed if submission succeeds
    - Confirmation page: Displays booking confirmation message.

Project Structure

    - src/components/
        - Header.js (logo + nav)
        - Nav.js (router links)
        - Main.js (routes + booking state)
        - HomePage.js (homepage layout)
        - CallToAction.js (hero section)
        - Specials.js (specials cards)
        - CustomersSay.js (testimonials)
        - Chicago.js (about section)
        - BookingPage.js (booking page layout)
        - BookingForm.js (reservation form + validation)
        - ConfirmedBooking.js (confirmation message)
        - Footer.js (footer layout)
    - src/App.js (app shell)
    - src/App.css (Little Lemon styling)

Notes for Graders / Reviewers

    - Semantic structure used: header, nav, main, section, footer, article
    - Accessibility included: labels linked to inputs, aria-label / aria-labelledby where appropriate, and focus styles.
    - Responsive layout: CSS includes breakpoints for smaller screens.
    - Images are implemented as conceptual placeholders to demonstrate layout and can be easily replaced.
    - The GitHub API used in the course environment was blocked, so the API helper code was downloaded and included locally for integration.

