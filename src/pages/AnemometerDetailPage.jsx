import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import AnemometerGraph from '../components/AnemometerGraph';

const AnemometerDetailPage = () => {
  const params = useParams();
  const anemometerId = params.anemometerId;

  const [anemometer, setAnemometer] = useState();

  useEffect(() => {
    setAnemometer(require(`../data/anemometers/detail/${anemometerId}.json`));
  }, [anemometerId]);

  return !anemometer ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="statistics-container">
        <h1>{anemometer.name}</h1>
        <h2>Statistics</h2>
        <p>Daily average: {anemometer.statistics.average.daily.force}</p>
        <p>Weekly average: {anemometer.statistics.average.weekly.force}</p>
      </div>
      <AnemometerGraph data={anemometer} />
    </>
  );
};

export default AnemometerDetailPage;
