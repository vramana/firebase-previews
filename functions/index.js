// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
import { logger } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";

// The Firebase Admin SDK to access Firestore.
import { initializeApp } from "firebase-admin/app";

initializeApp();

export const helloWorld = onRequest((request, response) => {
	response.send("Hello from Firebase!");
});
