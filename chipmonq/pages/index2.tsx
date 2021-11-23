import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getSurveys, Survey } from '../repositories/survey.repo';

import styles from '../styles/Home.module.css';
import { LayoutComponent } from '../components/layout.component';
import { useState } from 'react';

interface NextPageProps {
  surveys: Survey[];
  initialCount: number;
}
function Home(props: NextPageProps) {
  const [count, setCount] = useState(props.initialCount);

  return (
    <LayoutComponent>
      Welcome to <Link href="/">Pagina 1</Link>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </LayoutComponent>
  );
}

export default Home;

export async function getServerSideProps() {
  const surveys = await getSurveys();

  return {
    props: {
      surveys,
      d2: new Date().getTime(),
      initialCount: new Date().getTime(),
    },
  };
}
