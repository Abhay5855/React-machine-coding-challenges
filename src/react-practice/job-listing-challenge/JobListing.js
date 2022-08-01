import React, { useEffect, useState } from "react";
import axios from "axios";

const JobListing = () => {
  const [id, setId] = useState([]);
  const [company, setCompany] = useState([]);
  const [visible, setVisible] = useState([]);
  const [index , setIndex] = useState(0);

  // API call to get the id's
  const jobs = () => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then((res) => {
        setId(res?.data);

      })
      .catch((err) => {
        console.log(err);
      });
  };


 
  const visibleId = id.slice(0 , 9);
  const requests = visibleId?.map((item) => {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`);
  });

  Promise.all(requests)
    .then((res) => {
      console.log(res);
      setCompany(res);
    })
    .catch((err) => {
      console.log(err);
    });

  useEffect(() => {
    jobs();

    
  }, []);




  return company.map((item) => (
    <div style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center', flexDirection : 'column' ,  width : '100%'}}>
         <div style={{ border: "1px solid black", width: "300px", padding: "1em" }}>
      <h3>{item.data.by}</h3>
      <p>{item?.data?.title}</p>
    </div>

    </div>
   
  ));
};

export default JobListing;
