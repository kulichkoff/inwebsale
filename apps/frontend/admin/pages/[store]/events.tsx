import React, { ReactElement } from 'react';
import BaseLayout from '../../components/BaseLayout';
import { NextPageWithLayout } from '../_app';

const Events: NextPageWithLayout = () => {
  return (
    <>
      <div className="container"></div>
    </>
  );
};

Events.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Events;
