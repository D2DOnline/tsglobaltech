type props = {
  name:string;
  url:string;
}
export const Copyright = ({name, url}:props)=>{
    return <>
     <div className="flex flex-col items-center py-[0.5rem] text-fontRegularColor">
          <div>
            &copy; Copyright <strong>{name}</strong>. All Rights
            Reserved
          </div>
          <div>
            Designed by <a href={url}><strong>{name}</strong></a>
          </div>
        </div>
    </>
}