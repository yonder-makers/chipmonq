import type { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getSurveys, Survey } from '../repositories/survey.repo';

import styles from '../styles/Home.module.css';
import { LayoutComponent } from '../components/layout.component';

interface NextPageProps {
  surveys: Survey[];
}
function Home(props: NextPageProps) {
  return (
    <LayoutComponent>
      Welcome to <Link href="/index2">Pagina 2</Link>
      {JSON.stringify(props.surveys)}
      Saltuare
    </LayoutComponent>
  );
}

export default Home;

export function getServerSideProps(context: GetServerSidePropsContext) {
  const surveys = getSurveys();

  return {
    props: {
      surveys,
      d: new Date().getTime(),
    },
  };
}
