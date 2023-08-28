import UseGetSkill from '../../hooks/UseGetSkill';
import Spinner from '../../loader/Spinner';
import Progress from './progress/Progress';

const Skills = () => {
  const [isLoading, error, data] = UseGetSkill();

  if (isLoading) return <Spinner></Spinner>;

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-[100%] h-auto py-36 m-auto bg-slate-900'>
      {data?.map((skill, index) => (
        <Progress key={index} skill={skill}></Progress>
      ))}
    </main>
  );
};

export default Skills;
