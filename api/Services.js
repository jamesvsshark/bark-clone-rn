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
  { id: "1", title: "House cleaning", screeningQuestions: [] },
  {
    id: "2",
    title: "Handyman Service",
    screeningQuestions: [
      {
        questionText: "What kind of property is this for?",
        answerChoices: ["Apartment", "House", "Commercial", "Industrial"],
        answerType: "single",
      },
      {
        questionText: "What service(s) do you need?",
        answerChoices: [
          "Furniture assembly",
          "Gardening",
          "General maintenance",
          "Hanging pictures or shelves",
          "Plumbing",
        ],
        answerType: "multi",
      },
      {
        questionText: "How often do you need a handyman?",
        answerChoices: ["Just once", "Once a week", "Once a month"],
        answerType: "single",
      },
      {
        questionText: "When do you want this work carried out",
        answerChoices: [
          "Immediately",
          "In the next few weeks",
          "In the next few months",
        ],
        answerType: "single",
      },
    ],
  },
  {
    id: "3",
    title: "Security Guard Services",
    screeningQuestions: [],
  },
  { id: "4", title: "Bathroom Design", screeningQuestions: [] },
  { id: "5", title: "Home Renovations", screeningQuestions: [] },
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
