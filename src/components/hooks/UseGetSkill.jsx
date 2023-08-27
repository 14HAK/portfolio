import { useQuery } from '@tanstack/react-query';

const UseGetSkill = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const res = await fetch(
        'https://portfolio-server-red.vercel.app/api/skills'
      );
      return res.json();
    },
  });

  return [isLoading, error, data];
};

export default UseGetSkill;
