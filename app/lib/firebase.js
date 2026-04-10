import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBJxSrqoK5rDR9RmcU4PYSYKhdGrLO6hys',
  authDomain: 'burbly-7a57b.firebaseapp.com',
  projectId: 'burbly-7a57b',
  storageBucket: 'burbly-7a57b.firebasestorage.app',
  messagingSenderId: '56676639963',
  appId: '1:56676639963:web:e986d55904577401ca58fe',
  measurementId: 'G-DW107CS3PY',
};

// Prevent duplicate initialization in Next.js hot-reload / SSR
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export default app;
