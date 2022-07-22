export const youtubeChannels = [
  {
    // img should be a copied url
    coverImage:
      "data:image/jpeg;base64,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",
    title: "DAppuniversity",
    description: "lorem ipsum hdjhdgjkgdjkhdjf",
    tag: "Solidity, Web3js, Hardhat, Ethereum",
    url: "https://www.youtube.com/c/DAppuniversity",
  },
  {
    // img should be a copied url
    coverImage:
      "data:image/jpeg;base64,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",
    title: "DAppuniversity",
    description: "lorem ipsum hdjhdgjkgdjkhdjf",
    tag: "Solidity, Web3js, Hardhat, Ethereum",
    url: "https://www.youtube.com/c/DAppuniversity",
  },
  {
    // img should be a copied url
    coverImage:
      "data:image/jpeg;base64,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",
    title: "DAppuniversity",
    description: "lorem ipsum hdjhdgjkgdjkhdjf",
    tag: "Solidity, Web3js, Hardhat, Ethereum",
    url: "https://www.youtube.com/c/DAppuniversity",
  },
  {
    // img should be a copied url
    coverImage:
      "data:image/jpeg;base64,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",
    title: "DAppuniversity",
    description: "lorem ipsum hdjhdgjkgdjkhdjf",
    tag: "Solidity, Web3js, Hardhat, Ethereum",
    url: "https://www.youtube.com/c/DAppuniversity",
  },
  {
    // img should be a copied url
    coverImage:
      "data:image/jpeg;base64,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",
    title: "DAppuniversity",
    description: "lorem ipsum hdjhdgjkgdjkhdjf",
    tag: "Solidity, Web3js, Hardhat, Ethereum",
    url: "https://www.youtube.com/c/DAppuniversity",
  },
];

// module.exports = [
//   {
//     name: "D3.js",
//     categories: [smartContract],
//     description:
//       "D3 is a JavaScript library for visualizing data with HTML, SVG, and CSS.",
//     keywords: ["d3", "d3.js", "visualization", "dom", "javascript"],
//     links: {
//       [website]: "https://d3js.org/",
//     },
//     icon: "https://d3js.org/favicon.png",
//   },
//   {
//     name: "DaFont",
//     categories: [assets.fonts],
//     description:
//       "Archive of freely downloadable fonts. Browse by alphabetical listing, by style, by author or by popularity.",
//     keywords: [
//       "font",
//       "download",
//       "ttf",
//       "freeware",
//       "typefaces",
//       "typography",
//       "typeface",
//       "fonts",
//       "free",
//       "true type",
//       "dingbats",
//     ],
//     links: {
//       [website]: "https://www.dafont.com/",
//     },
//     icon: "https://www.dafont.com/img/favicon.ico",
//   },
// ];
