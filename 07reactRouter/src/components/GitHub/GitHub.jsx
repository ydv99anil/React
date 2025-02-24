import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
  const data = useLoaderData()
  
    // const [data, setData] = useState([])
    // const [repos, setRepos] = useState([])

    // useEffect(() => {
    //     const fetchFollow = fetch('https://api.github.com/users/ydv99anil')
    //       .then(res => res.json())
    //       .then(userData => {
    //           console.log("User Data: ", userData);
    //           setData(userData);
    //       });

    //     const fetchRepo = fetch('https://api.github.com/users/ydv99anil/repos')
    //       .then(repoRes => repoRes.json())
    //       .then(repoData => {
    //         console.log("Repositories: ", repoData);
    //         setRepos(repoData);
    //       });      
    // }, [])

  return (
    <div className='flex flex-row justify-between my-0.5  bg-gray-600 text-white  p-4 w-2/5 m-auto'>
      <div className='flex justify-center mt-3 w-80 h-70 rounded object-cover'>
        <img className='rounded-2xl' src={data.avatar_url} alt="Git Picture"/>
      </div>
      <div className='flex justify-center flex-col gap-5 text-center text-2xl m-auto'>
        <p>GitHub Followers: o{data.follwers}</p>
        <p>GitHub Repos: {data.public_repos}</p>
      </div>
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/ydv99anil')
  return res.json()
}