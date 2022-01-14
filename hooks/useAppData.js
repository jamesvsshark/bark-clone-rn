import { createContext, useEffect, useContext, useState } from "react";
import { getSampleRequests } from "../api/Requests";
import { getSampleRecommendedServices } from "../api/Services";

const AppDataContext = createContext(null);

export const AppDataProvider = ({ children }) => {
  const [sampleRequests, setSampleRequests] = useState([]);
  const [sampleRecommendedServices, setSampleRecommendedServices] = useState(
    []
  );

  const getSampleRequestsData = async () => {
    const data = await getSampleRequests();
    setSampleRequests(data);
  };

  const getSampleRecommendedServicesData = async () => {
    const data = await getSampleRecommendedServices();
    setSampleRecommendedServices(data);
  };

  useEffect(() => {
    getSampleRequestsData();
    getSampleRecommendedServicesData();
  }, []);

  return (
    <AppDataContext.Provider
      value={{ sampleRequests, sampleRecommendedServices }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export default function useAppData() {
  return useContext(AppDataContext);
}
