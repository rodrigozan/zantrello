import React, { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../../libs/db'; 

const NewList = () => {
  const router = useRouter();
  const [listTitle, setListTitle] = useState('');

  const handleCreateList = async () => {
    try {
      await db.collection('lists').insertOne({ title: listTitle });
      router.push('/');
    } catch (error) {
      console.error('Erro ao criar lista no MongoDB:', error);
    }
  };

  return (
    <div>
      <h1>Criar Nova Lista</h1>
      <input
        type="text"
        placeholder="Título da Lista"
        value={listTitle}
        onChange={(e) => setListTitle(e.target.value)}
      />
      <button onClick={handleCreateList}>Criar Lista</button>
    </div>
  );
};

export default NewList;
