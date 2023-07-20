import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

import { FB_PROJECT_ID, FB_CLIENT_EMAIL, FB_PRIVATE_KEY } from '$env/static/private';

import pkg from 'firebase-admin';

try {
    pkg.initializeApp({
        credential: pkg.credential.cert({
            projectId: FB_PROJECT_ID,
            clientEmail: FB_CLIENT_EMAIL,
            privateKey: FB_PRIVATE_KEY,
        }),
    });

} catch (err: any) {
    // In development the app may try to initialize firebase more than once,
    // which will cause an error. 
    if (!/already exists/u.test(err.message)) { console.error("Firebase Admin error: ", err.stack) }
}

// These can only be used on the server side in Svelte.
// For ex. in server.ts file or +page.server.ts file.
export const adminDB = getFirestore();
export const adminAuth = getAuth();
