// import React from "react"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"

// // const profilePic = () => (
// //   <section class="img-wrapper">
// //     <Img
// //     fluid={data.file.childImageSharp.fluid}
// //     alt="Gatsby Docs are awesome"
// //     />
// //   </section>
// // )

// // export default function profilePic() {
// //   const data = useStaticQuery(graphql`
// //     query {
// //       file(relativePath: { eq: "images/lcsataides-profile.png" }) {
// //         childImageSharp {
// //           fluid {
// //             ...GatsbyImageSharpFluid
// //           }
// //         }
// //       }
// //     }
// //   `)
// // }

// // export default function meAvatar() {
// //   const data = useStaticQuery(graphql`
// //     query {
// //       file(relativePath: { eq: "images/lcsataides-profile.png" }) {
// //         childImageSharp {
// //           fluid {
// //             ...GatsbyImageSharpFluid
// //           }
// //         }
// //       }
// //     }
// //   `)
// //   return (
// //     <div>
// //       <Img
// //         fluid={data.file.childImageSharp.fluid}
// //         alt="Gatsby Docs are awesome"
// //       />
// //     </div>
// //   )
// // }

// export default function Avatar({ data }) {
//   return (
//     <div>
//       <Img
//         fluid={data.file.childImageSharp.fluid}
//         alt="A corgi smiling happily"
//       />
//     </div>
//   )
// }
// export const query = graphql`
//   query MyQuery {
//     file(relativePath: { eq: "images/lcsataides.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `