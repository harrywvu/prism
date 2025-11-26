import React from 'react';
import { FeatureItem, TeamMember } from './types';

// Icons using simple SVG strings for portability
export const ICONS = {
  Wallet: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
    </svg>
  ),
  Key: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
    </svg>
  ),
  Book: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  Chart: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  )
};

export const FEATURES: FeatureItem[] = [
  {
    title: "Cashless Campus",
    description: "Secure, instant payments at canteens and stores. Parents can top-up remotely.",
    details: "The PRISM wallet integrates directly with university billing systems. Students can view transaction history in real-time, set spending limits, and receive low-balance notifications. Parents or guardians can instantly transfer funds via the secure portal, ensuring students never run out of dining or supply funds. Supports NFC tap-to-pay at all campus terminals.",
    icon: ICONS.Wallet
  },
  {
    title: "Smart Access",
    description: "NFC-enabled entry for dorms, labs, and restricted facilities.",
    details: "Say goodbye to physical keys. PRISM grants dynamic access permissions based on enrollment and housing status. A computer science student automatically gets 24/7 access to the coding labs, while residents get secure entry to their specific dorm buildings. Lost cards can be instantly deactivated via the app, preventing unauthorized access.",
    icon: ICONS.Key
  },
  {
    title: "Resource Management",
    description: "Tap to borrow library books or gym equipment. No more paper forms.",
    details: "Checkout processes are streamlined to a single tap. Whether borrowing a laptop from IT, a camera for a film project, or a book from the library, the asset is instantly logged to the student's ID. Reminders for due dates are sent automatically, and fines can be paid directly through the wallet integration.",
    icon: ICONS.Book
  },
  {
    title: "Admin Analytics",
    description: "Real-time dashboard for attendance tracking and campus usage data.",
    details: "University administrators gain unprecedented visibility into campus life. Heatmaps show facility usage density, helping optimize HVAC and cleaning schedules. Automated attendance tracking saves valuable class time. The analytics suite provides actionable insights into student engagement and resource allocation trends.",
    icon: ICONS.Chart
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "John Harold Alejo",
    role: "Founder & CEO",
    bio: "The visionary architect behind PRISM's unified ecosystem, driving the digital transformation of modern campuses.",
    imageUrl: "../assets/ceo.jpg"
  },
  {
    name: "Aeron Jhen Garvida",
    role: "COO",
    bio: "Orchestrating seamless operations and ensuring strategic integration across all university resource points.",
    imageUrl: "../assets/coo.jpg"
  },
  {
    name: "Mark Lemuel Valera",
    role: "CFO",
    bio: "Spearheading financial strategy and sustainable growth to build a robust and scalable platform.",
    imageUrl: "../assets/cfo.jpg"
  }
];

export const MOCK_STUDENT = {
  name: "Alex Sterling",
  id: "2024-8842",
  major: "Computer Science",
  balance: 42.50,
  imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&h=200&auto=format&fit=crop"
};

export const RECENT_ACTIVITY = [
  { id: '1', type: 'PAYMENT', location: 'Central Canteen', amount: 8.50, timestamp: '10:30 AM', status: 'SUCCESS' },
  { id: '2', type: 'ACCESS', location: 'Physics Lab B', amount: 0, timestamp: '09:15 AM', status: 'SUCCESS' },
  { id: '3', type: 'LIBRARY', location: 'Main Library', amount: 0, timestamp: 'Yesterday', status: 'PENDING' },
  { id: '4', type: 'PAYMENT', location: 'Campus Store', amount: 12.00, timestamp: 'Yesterday', status: 'SUCCESS' },
];

export const PARTNER_UNIVERSITIES = [
  "University of the Philippines",
  "Ateneo de Manila University",
  "De La Salle University",
  "University of Santo Tomas",
  "Polytechnic University of the Philippines",
  "Mapúa University",
  "Far Eastern University",
  "Adamson University"
];