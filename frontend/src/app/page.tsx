// app/page.tsx
import React from 'react';
import LoginForm from './components/auth/LoginForm'; // Adjust path as necessary
// Main App component for the application's home page
const App: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#1a1a1a',
      color: '#0f0',
      fontFamily: 'Inter, sans-serif',
      fontSize: '2em',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <h1>Welcome to Your Stock Monitoring App!</h1>
      <p>This is your main application page.</p>
      <p>In a real Next.js project, you would typically import and render the LoginForm component here, like this:</p>
      <pre style={{
        backgroundColor: '#000',
        border: '1px solid #0f0',
        padding: '15px',
        borderRadius: '8px',
        fontSize: '0.8em',
        color: '#fff',
        maxWidth: '80%',
        overflowX: 'auto'
      }}>
        <code>
{
// Example in your actual Next.js project's app/page.tsx:


export default function HomePage() {
  return (
    <div>
      {/* Other main app content */}
      <LoginForm />
      {/* More app content */}
    </div>
  );
}
   </code>
      </pre>
      <p>Since this is a self-contained preview environment, the LoginForm is provided as a separate runnable immersive.</p>
    </div>
  );
};

export default App;
