import React from 'react';
import {gql, useQuery} from "@apollo/client";
import LaunchCard from "../components/cards/LauchCard";


const Launches = () => {
    const {loading, error, data} = useQuery(gql`
    {
  launchesPast(limit: 10) {
    id
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      flickr_images
    }
    details
    mission_name
  }
}
  `);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    // @ts-ignore
    return data.launchesPast.map(launch => (
        // console.log(launch.mission_name)
        <LaunchCard launch={launch} key={launch.id}/>
    ));


    // return (
    //     <h1>Launches</h1>
    // );
}

export default Launches;