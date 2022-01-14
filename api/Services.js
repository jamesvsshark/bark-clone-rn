const sampleRecommendedServices = [
  {
    category: "Mobile Software Development",
    thumbnailImage: require("../assets/mobile-dev.png"),
  },
  {
    category: "Security Guard Services",
    thumbnailImage: require("../assets/security.png"),
  },
  {
    category: "House Cleaning",
    thumbnailImage: require("../assets/cleaning.png"),
  },
];

export const getSampleRecommendedServices = async () => {
  return Promise.resolve(sampleRecommendedServices);
};
