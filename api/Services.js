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

const sampleAvailableServices = [
  { id: "1", title: "House cleaning" },
  { id: "2", title: "Handyman Service" },
  { id: "3", title: "Security Guard Services" },
  { id: "4", title: "Bathroom Design" },
  { id: "5", title: "Home Renovations" },
];

export const getSampleAvailableServices = async (query) => {
  if (!query || query === "") {
    return;
  }
  return Promise.resolve(
    sampleAvailableServices.filter((d) =>
      d.title.toLowerCase().includes(query.toLowerCase())
    )
  );
};
