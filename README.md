# Frontend for Event Booking Platform  

This is the frontend of the Event Booking Platform, designed to provide an intuitive and responsive user interface for users to explore events, make bookings, and manage their profiles. Built using **Next.js**, **TypeScript**, and **Tailwind CSS**, this frontend seamlessly integrates with the backend API to deliver a complete user experience.  

## Features  

1. **Landing Page**  
   - Highlights the platform's core features and upcoming events.  

2. **User Authentication**  
   - Users can sign up, log in, reset passwords, and manage their sessions.  

3. **Event Exploration**  
   - View detailed event information with easy navigation.  

4. **User Dashboard**  
   - Access to account details, booking history, and profile management.  

5. **Responsive Design**  
   - Fully responsive interface designed using **Tailwind CSS** for mobile, tablet, and desktop.  

6. **Secure API Integration**  
   - Axios is used to consume the backend API with secure authentication handling.  

## Tech Stack  

- **Next.js**: React-based framework for server-rendered and static web applications.  
- **TypeScript**: Adds type safety and enhances development productivity.  
- **Tailwind CSS**: Utility-first CSS framework for styling.  
- **Axios**: For API integration and data fetching.  

## Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/desmondNzubechi/event-booking-frontend.git  
   ```  

2. Navigate to the project directory:  
   ```bash  
   cd event-booking-frontend  
   ```  

3. Install dependencies:  
   ```bash  
   npm install  
   ```  

4. Set up environment variables:  
   - Create a `.env.local` file in the root directory.  
   - Add the following variables:  
     ```plaintext  
     NEXT_PUBLIC_API_URL=<Your backend API URL>  
     ```  

5. Start the development server:  
   ```bash  
   npx next dev  
   ```  

6. Access the application at `http://localhost:3000`.  

## Folder Structure  
 
├── .next/               # Build artifacts (auto-generated)  
├── components/          # Reusable components for the UI  
│   ├── eventCard.tsx    # Component to display individual events  
│   ├── bookingModal.tsx # Modal for booking events  
│   ├── mobileNav.tsx    # Mobile navigation component  
│   ├── desktopNav.tsx   # Desktop navigation component  
├── pages/               # Next.js pages  
│   ├── about/           # About Us page  
│   ├── api/             # API route handlers (if any)  
│   ├── auth/            # Authentication-related pages  
│   │   ├── forgot-password.tsx  
│   │   ├── register.tsx  
│   │   ├── reset-password.tsx  
│   │   ├── signin.tsx  
│   │   ├── verify-email.tsx  
│   ├── contact-us.tsx   # Contact page  
│   ├── events/          # Event pages  
│   ├── fonts/           # Fonts setup for the app  
│   ├── my-account/      # User account management pages  
│   │   ├── change-password.tsx  
│   │   ├── edit-profile.tsx  
│   │   ├── my-bookings.tsx  
│   ├── index.tsx        # Landing page  
├── public/              # Public assets (images, icons, etc.)  
├── styles/              # Global styles and Tailwind CSS configurations  
├── .env.local           # Environment variables  
├── package.json         # Project metadata and dependencies  
└── README.md            # Documentation for the project  


## Features Overview  

### Pages  

1. **Landing Page**  
   - Includes hero section, "Why Choose Us" section, popular events, and client reviews carousel (using React Slick).  

2. **About Us Page**  
   - Information about the platform and its mission.  

3. **Event Pages**  
   - Explore available events with detailed descriptions.  

4. **Contact Page**  
   - Users can reach out for inquiries or support.  

5. **User Dashboard**  
   - **Dashboard View**: Displays account status, total events, and bookings.  
   - **Edit Profile**: Allows users to update their information.  
   - **Change Password**: Securely update passwords.  
   - **Booked Events**: Shows booking history.  

6. **Authentication Pages**  
   - Sign up, login, forgot password, and reset password functionality.  

## API Integration  

- **Authentication**:  
  - Sign up, login, and logout endpoints are fully integrated with the backend.  
- **User Profile**:  
  - API calls for updating profiles and changing passwords.  
- **Bookings**:  
  - Fetch and manage user bookings.  

## Running Tests  

Testing framework setup (e.g., Jest) for frontend unit and integration testing.  

Run tests:  
```bash  
npm test  
```  

## Future Enhancements  

1. Implement a search and filter feature for events.  
2. Add admin panel for managing events directly from the frontend.  
3. Enhance client review section with video testimonials.  

## Contributions  

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.  