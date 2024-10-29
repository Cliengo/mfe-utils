import { useParams } from 'react-router-dom';

export const useWebsiteId = () => {
  return useParams().websiteId as string;
};
