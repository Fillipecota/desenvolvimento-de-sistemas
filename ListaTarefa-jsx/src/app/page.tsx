'use client'
import { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { v4 as uuid } from 'uuid';


type item = {
  id: string;
  text: string;
  checked: boolean;
}

export default function ListaTarefa() {
  const [lista, setlista] = useState<any>([])
  const [tarefa, settarefa] = useState<string>('');

  useEffect(() => {
    loadlista();
  }, [])

  async function handleCreatlista(event: FormEvent) {
    event.preventDefault()

    const novalista: item = {
      id: uuid(),
      text: tarefa,
      checked: false,

    }
    await axios.post('http://localhost:3001/lista', novalista);
    await loadlista();
    settarefa('');
  }

  async function loadlista() {
    const response = await axios.get('http://localhost:3001/lista');
    setlista(response.data)
  }
  function concluir() {
    const [concluir, setconcluir] = useState<boolean>(false);

    function handleClose() {
      setconcluir(true);
    }
  }



  return (
    <div className="conteiner">
      <div className="content">
        <header className="main">
          <h1>ListaTarefa</h1>
        </header>
      </div>
      <div className='cont'>
        <form onSubmit={handleCreatlista}>
          <input
            id='item'
            type="texto"
            placeholder='informe a tarefa'
            value={lista}
            onChange={(e) => setlista(e.target.value)} />
          <button type="submit" className="Button">
            comentar
          </button>
        </form>
      </div>
      {/* {lista.map((item) => (
          // <li key={item.id}>
          //   <input type="checkbox" />
          //   {item.text}
          // </li>
        ))} */}
    </div >
  );
}
