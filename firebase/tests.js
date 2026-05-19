import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './config';

const getUserTestsRef = (userId) => collection(db, 'users', userId, 'tests');

const encodeRows = (rows) => rows.map((row) => JSON.stringify(row));
const decodeRows = (rows) => {
  if (!rows) return [];
  return rows.map((row) => (typeof row === 'string' ? JSON.parse(row) : row));
};

export const saveTest = (userId, { label, headers, rows, interpretationSummary = '' }) =>
  addDoc(getUserTestsRef(userId), {
    label,
    headers,
    rows: encodeRows(rows),
    interpretationSummary,
    createdAt: serverTimestamp(),
  });

export const getTests = async (userId) => {
  const q = query(getUserTestsRef(userId), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => {
    const data = d.data();
    return { id: d.id, ...data, rows: decodeRows(data.rows) };
  });
};

export const getTest = async (userId, testId) => {
  const ref = doc(db, 'users', userId, 'tests', testId);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) return null;
  const data = snapshot.data();
  return { id: snapshot.id, ...data, rows: decodeRows(data.rows) };
};

export const deleteTest = (userId, testId) =>
  deleteDoc(doc(db, 'users', userId, 'tests', testId));

export const updateTestLabel = (userId, testId, label) =>
  updateDoc(doc(db, 'users', userId, 'tests', testId), { label });

export const updateTestInterpretation = (userId, testId, interpretationSummary) =>
  updateDoc(doc(db, 'users', userId, 'tests', testId), { interpretationSummary });

export const countOutOfRange = (headers, rows) => {
  const resultIdx = headers.findIndex((h) =>
    ['result', 'результат'].includes(h.toLowerCase())
  );
  const rangeIdx = headers.findIndex((h) =>
    ['reference range', 'референтні інтервали', 'normal range'].includes(h.toLowerCase())
  );
  if (resultIdx === -1 || rangeIdx === -1) return 0;

  return rows.reduce((count, row) => {
    const result = row[resultIdx];
    const range = row[rangeIdx];
    if (!result || !range) return count;

    const resultVal = parseFloat(String(result).replace(',', '.'));
    if (isNaN(resultVal)) return count;

    const parts = String(range).split('-').map((p) => p.trim());
    if (parts.length === 2) {
      const min = parseFloat(parts[0].replace(',', '.'));
      const max = parseFloat(parts[1].replace(',', '.'));
      if (!isNaN(min) && !isNaN(max) && (resultVal < min || resultVal > max)) {
        return count + 1;
      }
    }
    return count;
  }, 0);
};
