import React, { useSate } from "react";
import { useQuery } from "@apollo/client";
import { mollyBookQuery } from "../utils/queries";
import { BookList } from "../components";

const Home = () => {
  const { data, loading, error }= useQuery(mollyBookQuery);
  const books = data?.books || [];

  console.log("hello")

  if (loading || data === undefined){
    return <div>Loading ...</div>
  } else if (error) {
    return <div>Error</div>
  } else {
    return (
      <div>
        <BookList books={books}/>
      </div>
    )
  }
}

export default Home;
