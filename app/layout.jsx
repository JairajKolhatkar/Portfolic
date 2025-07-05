import './globals.css';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';

export const metadata = {
  title: 'Jairaj Kolhatkar - Portfolio',
  description: 'Personal portfolio showcasing skills, projects, and resume',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ParticleBackground />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
} 