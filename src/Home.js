import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [isPending, setIsPending] = useState(true);

  //useEffect runs on every render
  // do not change state in useEffect.  Can cause neverending loop.
  // empty dependency array only runs on initial render.
  // adding dependency to array will run everytime that state changes and on initial
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setIsPending(false); //this is used to remove the Loading... in conditional template
      });
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {/* blogs && is needed because the data takes a bit to load */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
