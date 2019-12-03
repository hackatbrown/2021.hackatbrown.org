import React from 'react';
import Firebase from '.';

// Interface for Firebase context
export interface FirebaseContextInterface {
    firebase: Firebase
}

// Create Firebase context to be consistent with one per session
const ctxt = React.createContext<FirebaseContextInterface | null>(null);
  
export const FirebaseContextProvider = ctxt.Provider;
export const FirebaseContextConsumer = ctxt.Consumer;