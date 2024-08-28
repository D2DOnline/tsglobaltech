type props = {
  name:string;
  url:string;
}
export const Copyright = ({name, url}:props)=>{
    return <>
     <div className="flex flex-col md:flex-row items-center py-[1rem] text-fontRegularColor">
          <div>
            &copy; {new Date().getFullYear()} <strong>{name}</strong>. All Rights
            Reserved
          </div>
          <div className="hidden md:flex px-5">||</div>
          <div>
            Designed by <a href={url}><strong>{name}</strong></a>
          </div>
        </div>
    </>
}