import { useScroll } from '../contexts/ScrollContext';
import { ToolsAndSkills } from '../data/SiteData';

const Skills = () => {
const {SkillsView} = useScroll()
  return (
    <div ref={SkillsView} className='paddingX flex flex-col justify-center items-center gap-8 py-32 relative'>
        <div className=' my-4'>
            <p className='text-4xl'>Tools And Skills</p>
            <p className='absolute left-0 top-20 text-5xl sm:text-9xl text-white/0 opacity-10 text-stroke-3'>Tools And Skills</p>
        </div>
        <div className='flex gap-8 flex-wrap items-center justify-center'>
            {ToolsAndSkills.map((item) => {
                    const Icon = item.icon
                return(
                    <div className={`size-32 sm:size-36 flex justify-center items-center flex-col gap-4 rounded-lg border border-white/20  ${item.title === "ReactJs" ? "bg-lavender hover:bg-lavender/80" : "hover:bg-white/10"}`}>
                        <Icon className={`text-4xl ${item.title === "ReactJs" ? "text-white" : "text-lavender"}`}/>
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills