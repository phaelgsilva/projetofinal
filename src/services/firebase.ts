import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, doc, getDoc, getDocs } from 'firebase/firestore';

export const cadastrarUsuario = async (email: string, senha: string, nome: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      nome,
      email,
      createdAt: new Date()
    });
    return userCredential.user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};


const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const getQuadras = async () => {
  const quadrasRef = collection(db, 'quadras');
  const snapshot = await getDocs(quadrasRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getCourtDetails = async (courtId: string) => {
  const docRef = doc(db, 'quadras', courtId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  throw new Error('Quadra não encontrada');
};

export const getHistoricoReservas = async () => {
  const reservasRef = collection(db, 'reservas');
  const snapshot = await getDocs(reservasRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};