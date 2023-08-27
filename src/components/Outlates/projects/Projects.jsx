import UseGetRepos from '../../hooks/UseGetRepos';
import SingleProject from './singleProject/SingleProject';

const Projects = () => {
  const [isLoading, error, data] = UseGetRepos();

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-evenly w-[100%] h-auto m-auto bg-slate-900'>
      {/* todo: here all project cards are js mapeing */}
      {data?.map((project, index) => (
        <SingleProject key={index} project={project}></SingleProject>
      ))}
    </div>
  );
};

export default Projects;
