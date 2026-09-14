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
import { isOutOfRange, findResultColumnIndex, findRangeColumnIndex } from '../lib/anomalyDetection';

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

// Kept as re-exports so existing callers (e.g. pages/my-tests) don't need
// to change their imports — the actual logic now lives in lib/anomalyDetection,
// shared with the table-highlighting in FileUploaderWidget.
export const findResultIdx = findResultColumnIndex;
export const findRangeIdx = findRangeColumnIndex;

export const countOutOfRange = (headers, rows) => {
  const resultIdx = findResultColumnIndex(headers);
  const rangeIdx = findRangeColumnIndex(headers);
  if (resultIdx === -1 || rangeIdx === -1) return null;

  return rows.reduce((count, row) => {
    return count + (isOutOfRange(row[resultIdx], row[rangeIdx]) ? 1 : 0);
  }, 0);
};
