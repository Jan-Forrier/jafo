import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default function EvenementenPage({ data }) {
  const evenementen = data.allSanityEvenement.nodes

  return (
    <Layout pageTitle="Evenementen">
        <ul >
          {evenementen.map(evenementen => (
            <li key={evenementen.title}>
              <h2 >{evenementen.title}</h2>
            </li>
          ))}
        </ul>
  </Layout>
  )
}

export const query = graphql`
query {
    allSanityEvenement {
      nodes {
        title
      }
    }
  }
`