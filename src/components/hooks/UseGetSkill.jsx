import { useQuery } from '@tanstack/react-query';

const UseGetSkill = () => {
  const {
    isLoading,
    error,
    data: data = [],
  } = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const res = await fetch(
        'https://portfolio-server-red.vercel.app/api/skills'
      );
      const skills = await res.json();
      return skills;
    },
  });

  return [isLoading, error, data];
};

export default UseGetSkill;
