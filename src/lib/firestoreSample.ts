// Firestoreの簡単なCRUDサンプル
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  QueryDocumentSnapshot,
  DocumentData
} from 'firebase/firestore';

const COLLECTION_NAME = 'samples';

export async function addSample(data: any) {
  return await addDoc(collection(db, COLLECTION_NAME), data);
}

export async function getSamples() {
  const snapshot = await getDocs(collection(db, COLLECTION_NAME));
  return snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({ id: doc.id, ...doc.data() }));
}

export async function updateSample(id: string, data: any) {
  return await updateDoc(doc(db, COLLECTION_NAME, id), data);
}

export async function deleteSample(id: string) {
  return await deleteDoc(doc(db, COLLECTION_NAME, id));
}
