const sampleRequests = [
  {
    requestId: "1",
    requestCategory: "Fence & Gate Installation",
    requestDate: "Thu, 13 Jan 2022 17:47:15 GMT",
    requestStatus: "MATCHED",
    matches: [
      {
        companyId: "1",
        companyLogo: require("../assets/trainer-logo.png"),
        companyName: "Sakonnet Lawn Care",
        about:
          "Sakkonnet Lawn Care was established in 2013 and has been a full service landscape company serving it's community. We do our best to provide fair services and fair prices. We are family owned and operated.",
        companyLocation: "Fall River, MA",
        categories: ["Gardening", "Landscaping", "Lawn Care"],
        highlightedServices: ["Reoccurring cuts", "Clean outs", "Snow removal"],
        reviewData: {
          averageRating: 3,
          reviewsCount: 10,
          reviews: [],
        },
      },
      {
        companyId: "3",
        companyLogo: require("../assets/ph.png"),
        companyName: "ProperHandyman",
        about:
          "Proper Handyman was established in 2013 and has been a full service construction company serving it's community. We do our best to provide fair services and fair prices. We are family owned and operated.",
        companyLocation: "Fall River, MA",
        categories: ["Home Repairs", "Windows & Doors", "Light Remodels"],
        highlightedServices: [
          "Quick to respond",
          "Interior painting",
          "Vinyl floor installation",
          "Light remodels",
        ],
        reviewData: {
          averageRating: 5,
          reviewsCount: 51,
          reviews: [],
        },
      },
    ],
  },
  {
    requestId: "2",
    requestCategory: "Personal Trainer",
    requestDate: "Tue, 11 Jan 2022 17:47:15 GMT",
    requestStatus: "QUOTED",
    matches: [
      {
        companyId: "2",
        companyLogo: require("../assets/trainer-logo.png"),
        highlightedServices: [
          "Quick to respond",
          "Fitness training",
          "Nutrition plans",
        ],
        reviewData: {
          averageRating: 3,
          reviewsCount: 10,
          reviews: [],
        },
      },
    ],
  },
  {
    requestId: "3",
    requestCategory: "Handyman",
    requestDate: "Wed, 14 Jul 2021 17:47:15 GMT",
    requestStatus: "CLOSED",
    matches: [],
  },
];

export const getSampleRequests = async () => {
  return Promise.resolve(sampleRequests);
};
