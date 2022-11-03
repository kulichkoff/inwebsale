import { Button } from '@inwebsale/shared/ui';
import React, { ReactElement } from 'react';
import BaseLayout from '../../components/BaseLayout';
import { NextPageWithLayout } from '../_app';

const Events: NextPageWithLayout = () => {
  function handleClick() {
    console.log('clicked');
  }
  return (
    <>
      <div className="container">events page works
        <Button clickHandler={handleClick} icon="download">
          Сохранить
        </Button>
      </div>
    </>
  );
};

Events.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Events;
