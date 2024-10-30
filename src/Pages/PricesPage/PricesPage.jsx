import React, { useEffect } from 'react';
import Prices from '../../components/Prices/Prices';

const PricesPage = (props) => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Prices t={props.t} />
    </main>
  );
};

export default PricesPage;
