"use client";

// pages/index.tsx
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, DocumentData, Timestamp } from 'firebase/firestore';

interface Item {
  id: string;
  date: Timestamp;
  title: string;
  user: string;
}

export default function Home() {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'entries'));
      const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Item[];
      setData(docs);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Firestore</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title} - {item.date.toDate().toLocaleDateString()} - {item.user}</li>
        ))}
      </ul>
    </div>
  );
}
