import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  title: string;
  todos: todoObj[];
}

interface todoObj {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Home(props: Props) {
  const { todos } = props;
  if (!todos) {
    return <h1>loading...</h1>;
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-24 py-6 ${inter.className}`}
    >
      <h1 className="text-black text-[40px]">Learning Next.js .... </h1>
      <h1>{props.title}</h1>
      <h1>Todos</h1>
      {todos?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const todo = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todoJson: todoObj[] = await todo.json();

  return {
    props: {
      title: "Hello from get static props.",
      todos: todoJson,
    },
    // notFound : true, // for example hum api me req bhjein or us query ke husab sa koi data na mile
    // tw not found true bhj sekte hain is se 404.js wala page return kara dega
    revalidate: 10, // Agar last time build banayee hua 10 second nahi hoye tw same page dedega ..
    // wrna again render krke dega (again build banegi)
  };
}
