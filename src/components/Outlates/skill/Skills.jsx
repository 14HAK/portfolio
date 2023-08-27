import UseGetSkill from '../../hooks/UseGetSkill';
import Progress from './progress/Progress';

const Skills = () => {
  const [isLoading, error, data] = UseGetSkill();

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className='flex flex-col justify-end items-center w-[100%] h-auto py-36 m-auto bg-slate-900'>
      {data?.map((skill, index) => (
        <Progress key={index} skill={skill}></Progress>
      ))}
    </main>
  );
};

export default Skills;
