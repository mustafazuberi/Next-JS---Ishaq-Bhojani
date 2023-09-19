import { GetServerSidePropsContext } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <title>testing title</title >
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between px-24 py-6 ${inter.className}`}
      >
        <h1>{props.title}</h1>
      </main>
    </>
  );
}

// export async function getStaticProps(context: GetStaticPropsContext) {
//   const todo = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${context.params?.todoId}`
//   );
//   const todoJson: Props = await todo.json();
//   return {
//     props: todoJson,
//   };
// }

// export const getStaticPaths: GetStaticPaths = () => {
//   return {
//     paths: [
//       {
//         params: { todoId: "1" },
//       },
//     ],
//     fallback: "blocking",
//   };
// };

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const todo = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${context.params?.todoId}`
  );
  const todoJson: Props = await todo.json();
  return {
    props: todoJson,
  };
};
