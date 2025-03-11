import Person from "@/components/person";
import Link from "next/link";
import "./home.css";

export default function Home() {
  const lista = [
    {
      name: "fellipe",
      age: 25
    },
    {
      name: "maria",
      age: 30
    },
    {
      name: "joao",
      age: 20
    }

  ]

  return (
    <div>
      <h1>Hello World</h1>
      <h2>teste</h2>

      <Link href="/login">
        <button>Home</button>
      </Link>


      <div className="container">
        {lista.map((item) => (<Person nome={item.name} idade={item.age} key={item.name} />
        ))}
      </div>

    </div>
  );
}
