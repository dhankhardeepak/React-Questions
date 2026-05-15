import { useEffect } from "react";

export default function ImagePost({ data, setPage }) {
  console.log(data);
  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
      if (param[0].isIntersecting) {
        observer.unobserve(element);
        setPage((prevPage) => prevPage + 1);
      }
    });

    const element = document.querySelector(".imagePost:last-child");
    if (!element) return;
    observer.observe(element);

    return () => observer.unobserve(element);
  }, [data, setPage]);
  return (
    <>
      {data.map((item) => {
        return (
          <img className="imagePost" key={item.id} src={item.download_url} />
        );
      })}
    </>
  );
}
