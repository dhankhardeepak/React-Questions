import { useState, useEffect } from "react";
import ImagePost from "./ImagePost";

export default function Infinite() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const resp = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=4`
      );
      const res = await resp.json();
      if (res && res.length) {
        setData((prevData) => [...prevData, ...res]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="container">
      {data && data.length ? (
        <ImagePost data={data} setPage={setPage} />
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  );
}
