import { useState, useEffect } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [firstPilot, setFirstPilot] = useState('')

  console.log({ starship });

  useEffect(() => {
    if (starship.pilots.length === 0) setFirstPilot('No pilots')
    fetch(starship.pilots[0])
    .then(response => response.json())
    .then(response => setFirstPilot(response.name))
  }, [starship])

  return <li>{starship.name} - First Pilot {firstPilot}</li>;
}

export default StarshipsListItem;
