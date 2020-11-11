import React, { useState, useEffect } from "react"
import { DialogueWiseService } from 'dialogue-wise';

export default function Home() {
  // ----------------------
  // RUNTIME DATA FETCHING
  // ----------------------
  const [heroContent, setHeroContent] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    /*fetch(`https://testdw.free.beeceptor.com/`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setStarsCount(resultData.stargazers_count)
      })*/ // set data for the number of stars

    let request = {
      slug: 'hero-section',
      apiKey: 'b1266377591c4f2a9494c3abdd2cac5381D6Z825D26CEBAE8B6rn',
      emailHash: '/kgmM46s1xC56BOFWRZp4j+0bdU19URpXdNT9liAX50=',
    };

    let dialogueWiseService = new DialogueWiseService();
    dialogueWiseService.getDialogue(request).then(res => {
      setHeroContent(res['dialogue'][0]['hero-content'])
    })

  }, [])

  return (<div dangerouslySetInnerHTML={{ __html: heroContent }}></div>)
}
