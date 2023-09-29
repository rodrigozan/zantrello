import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import List from '../components/List';
import db from '../libs/db'; 

export default function Home() {
  const [lists, setLists] = useState([]);

  const chumbad_lists = [
    {
      id: 'lista-1',
      title: 'Lista de Tarefas 1',
      cards: [
        { id: 'tarefa-1', title: 'Tarefa 1' },
        { id: 'tarefa-2', title: 'Tarefa 2' },
      ],
    },
    {
      id: 'lista-2',
      title: 'Lista de Tarefas 2',
      cards: [
        { id: 'tarefa-3', title: 'Tarefa 3' },
        { id: 'tarefa-4', title: 'Tarefa 4' },
      ],
    },
  ];

  useEffect(() => {
    async function fetchLists() {
      try {
        const response = await db.collection('lists').find().toArray();
        if(response) setLists(response)     
        else setLists(chumbad_lists)   
      } catch (error) {
        console.error('Erro ao buscar listas no MongoDB:', error);
      }
    }

    fetchLists();
  }, []);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <h1 className="text-2xl font-semibold mb-4">Minhas Listas</h1>
      <div className="grid grid-cols-2 gap-4">
        {lists.map((list) => (
          <Link key={list._id} href={`/lists/${encodeURIComponent(list._id)}`}>
            <List listTitle={list.title} cards={list.cards} />
          </Link>
        ))}
      </div>
      <Link href="/lists/new">Adicionar Nova Lista</Link>
    </main>
  );
}
