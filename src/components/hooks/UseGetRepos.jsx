import { useQuery } from '@tanstack/react-query';

const UseGetRepos = () => {
  const {
    isLoading,
    error,
    data: data = [],
  } = useQuery({
    queryKey: ['repositories'],
    queryFn: async () => {
      const res = await fetch(
        'https://portfolio-server-red.vercel.app/api/repos'
      );
      return res.json();
    },
  });

  return [isLoading, error, data];
};

export default UseGetRepos;
