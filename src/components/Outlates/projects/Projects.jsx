import SingleProject from './singleProject/SingleProject';

const Projects = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-evenly w-[100%] h-auto m-auto bg-slate-900'>
      <SingleProject></SingleProject>
      <SingleProject></SingleProject>
      <SingleProject></SingleProject>
      <SingleProject></SingleProject>
    </div>
  );
};

export default Projects;
