module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        title: "My First G Site",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            }
          },
        "gatsby-plugin-mdx",
        {
          resolve: 'gatsby-source-sanity',
          options: {
            projectId: 'nqbc7hqo',
            dataset: 'production',
            watchMode: true, // Updates your pages when you create or update documents
            token: 'skNuqd63tD8ZA80UUbBp9Si901BuEzHyOP5IrwPN9sElguR9oTFsjCTvvxPdxAUYBgtjBwugoCnnNttdK7y3xNjHPSIp59rDPh1haY9GObv4MafdJG7va8J33IbXJeCODF9Na2blX0ZgmQLAYNk7yckXk7GY0gywgduclGVVZMRniAQb5rUn',
          },
        },
        {
          resolve: '@plasmicapp/loader-gatsby',
          options: {
            projects: [
              {
                id: 'gq3Uq8Ndyp9bFhPCbiKgyk', // ID of a project you are using
                token: 'MmI40HzpH5KT6dtd0SMZNpPq55hXq5MsHOhTN7tx2FlkDmiysUCKvHtD6iyf6CrzmmvVuMEt7zQ4f1IKHo0Q' // API token for that project
              }
            ],
            defaultPlasmicPage: require.resolve('./src/templates/defaultPlasmicPage.tsx'),
            // Optionally specify pages to ignore.
            ignorePaths: ['/my-page']
          }
        },
    ]
}