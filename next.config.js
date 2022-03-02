/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['links.papareact.com']
  },
  env:{
    mapbox_key:'pk.eyJ1IjoiaWxtYW4zIiwiYSI6ImNsMDg4dWUxbjAxN2IzaW4wdHR3Z3p5c2YifQ.pw3iiQ8llM31zI269iItvw'
  }
}

module.exports = nextConfig
