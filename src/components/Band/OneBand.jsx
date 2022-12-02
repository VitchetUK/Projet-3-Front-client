import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import service from "../../api/apiHandler";

const OneBand = () => {
  const [band, setBand] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    service
      .get(`/api/bands/${id}`)
      .then((response) => {
        setBand(response.data);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  if (!band) return <div className="loading">Loading...</div>;

  // return <pre>{JSON.stringify(band, null, 2)}</pre>;
  return (
    <>
      <Link to={`/contact/bands/${band._id}`}>Contact them</Link>

      <div className="searchDiv"></div>
      <div className="oneBandId">
        <p>
          {band.user.name}'s search: {band.searchedMusician}
        </p>
        <p>{band.musicStyle}</p>
        <p>{band.city}</p>
        <p>{band.description}</p>
        <p>{band.availability}</p>
      </div>
    </>
  );
};

export default OneBand;
