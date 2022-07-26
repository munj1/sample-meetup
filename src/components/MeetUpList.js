import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Card from "./Card";

const MeetUpList = () => {
  const [isLoading, setIsloading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // let meetuplist = useSelector((state) => {
  //   return state;
  // });
  // console.log("data in redux store", meetuplist);

  useEffect(() => {
    setIsloading(true);
    fetch(
      "https://react-getting-started-d7f6f-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsloading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  useEffect(() => {
    console.log("fetched data", loadedMeetups);
  }, [loadedMeetups]);

  if (isLoading) {
    return <div>isLoading...</div>;
  } else {
    return (
      <>
        {/* <Card {...meetuplist.meetups[0]} /> */}
        {loadedMeetups.map((meetup, i) => {
          return <Card {...meetup} key={i} />;
        })}
      </>
    );
  }
};

export default MeetUpList;
