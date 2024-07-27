import { Banner } from "../banner/banner"

type props = {
    heading:string;
}
export const PageHeader = ({heading}:props)=>{
    return<>
    <div className="">
        <Banner isFullHeight={false}>
          <div className="page-heading">{heading}</div>
        </Banner>
      </div>
    </>
}