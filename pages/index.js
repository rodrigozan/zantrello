import React from 'react';
import Link from 'next/link';
import Layout from '../layouts/default';
import List from '../components/List';


export default function Home() {
  const lists = [
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

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1 className="text-2xl font-semibold mb-4">Minhas Listas</h1>
      <div className="grid grid-cols-2 gap-4">
        {lists.map((list) => (
          <Link key={list.id} href={`/lists/${encodeURIComponent(list.id)}`}>
            <List listTitle={list.title} cards={list.cards} />
          </Link>
        ))}
      </div>
      <Link href="/lists/new">
        Adicionar Nova Lista
      </Link>
    </main>
  )
}
