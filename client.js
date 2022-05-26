// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '7pa1r3zi', // you can find this in sanity.json
  dataset: 'blogs', // or the name you chose in step 1
  apiVersion: 'v2021-10-21',
  token:"skgnefxDw0I8ZpoJxoPZUtGjDCZRsZCTA40t281QWjpNYmQKxd8K33g9ADQbW9rNgeGaOLyjA7p41oKbpp6OMcIog3y18tSW9ahdM9PiJFbULqnXi64AMHgd6tc8Bsrhn6ZhIEmPNQBOZKcceKxkQ2SlvdCWRbXV44V2hWglQmpzb3ywuw99",
  useCdn: true, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true
});