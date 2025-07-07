import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  console.error('❌ Missing Clerk publishable key!');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Navbar />
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
