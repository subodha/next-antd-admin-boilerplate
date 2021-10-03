import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Button } from 'antd';

const test = 'test';

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/login">Login</Link>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      layout: 'master',
      name: '',
    },
  };
};

export default Home;
