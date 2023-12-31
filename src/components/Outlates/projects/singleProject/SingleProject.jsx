import { Link } from 'react-router-dom';
import TechnologyBtn from '../technology/TechnologyBtn';
import Spinner from '../../../loader/Spinner';
import NotFound from '../../../notfound/NotFound';
import UseGetRepos from '../../../hooks/UseGetRepos';
// eslint-disable-next-line react/prop-types
const SingleProject = ({ project }) => {
  const [isLoading, error] = UseGetRepos();

  if (isLoading) return <Spinner></Spinner>;
  if (error) return <NotFound></NotFound>;

  const {
    technologies,
    siteImg,
    finishDate,
    projectName,
    overview,
    sitePreview,
  } = project;
  console.log(siteImg);
  // console.log(project);
  // console.log(technologies);

  return (
    <div>
      <div className='w-full p-4'>
        <div className='bg-slate-800 text-white p-3 rounded-lg'>
          <div className='w-auto h-60 overflow-y-scroll rounded-md mb-3'>
            <img
              className='h-auto rounded w-full object-cover object-center mb-6'
              src={
                !siteImg ? 'https://i.ibb.co/xg7XHhB/toy-world.png' : siteImg
              }
              alt={siteImg}
            />
          </div>
          <h3 className='tracking-widest text-xs pb-[2px] font-medium title-font'>
            {finishDate}
          </h3>
          <h2 className='text-lg font-bold title-font mb-4'>
            {projectName}{' '}
            <Link to={`${sitePreview}`} target={'_blank'}>
              <span className='font-semibold px-2 py-[2px] text-[12px] rounded-full bg-[#eb4a4c] text-slate-200 hover:bg-slate-900 hover:border hover:border-rose-300 transition-all'>
                preview
              </span>
            </Link>
            <Link to={''} target={'_blank'}>
              <span className='font-semibold px-2 py-[2px] ms-1 text-[12px] rounded-full bg-[#eb4a4c] text-slate-200 hover:bg-slate-900 hover:border hover:border-rose-300 transition-all'>
                details
              </span>
            </Link>
          </h2>
          <p className='leading-relaxed pb-3'>{overview?.slice(0, 100)}...</p>

          <div className='allTechnologies grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-3'>
            {/* todo: here all technologys are mapped */}
            {technologies?.map((e, i) => (
              <TechnologyBtn key={i}>
                <span>{e}</span>
              </TechnologyBtn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
