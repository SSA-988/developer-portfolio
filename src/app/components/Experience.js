"use client";
import { groq } from "next-sanity";
import React, { useState, useEffect } from "react";
import { client } from "../../../developer-portfolio/sanity";

async function getData() {
  return client.fetch(groq`*[_type == "experience"]`);
}

function Experience() {
  const cardsData = [
    {
      name: "Frontend Developer at Chance",
      image:
        "https://play-lh.googleusercontent.com/mARUNHonOc6MW2rsbr7V9h1CMM0EbloWbfOw7E64K_r2QwCzTPAmaOD_VjlzgT4syA=w480-h960-rw",
      title: "Frontend Developer at Chance",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
    {
      name: "App Developer at Patilkaki",
      image:
        "data:image/jpeg;base64,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",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
    {
      name: "Content Creator at Code Feast",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQExtG371zD5dA/company-logo_200_200/0/1669296742664/codefeast_logo?e=1701907200&v=beta&t=LA1tehO1JpZgaHMElen6VrWF5xemCuq6bozHh5vY3MM",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
  ];
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getData()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log("error fetching posts", error);
      });
  }, []);
  return (
    <>
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Experience
      </h3>

      <div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 mt-8 mb-20">
        {posts?.map((item, index) => (
          <div
            className="bg-slate-400 p-6 rounded-lg shadow-md mx-4"
            key={index}
          >
            <div className="flex items-center justify-center">
              <img
                className="rounded-full w-32 h-32 mx-auto md:mx-0 object-contain"
                src={item?.image}
              />
            </div>
            <h4 className="text-xl text-white font-bold mb-2 mt-4">
              {item?.name}
            </h4>
            <ul className="text-xl text-white font-light text-left list-disc">
              {item?.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
