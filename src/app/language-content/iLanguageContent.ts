function proxiedPropertiesOf<TObj>(obj?: TObj) {
  return new Proxy(
    {},
    {
      get: (_, prop) => prop,
      set: () => {
        throw Error("Set not supported");
      },
    }
  ) as {
    [P in keyof TObj]?: P;
  };
}

export const lc = proxiedPropertiesOf<iLanguageContent>();

export interface iLanguageContent {
  common_theme: string;
  common_language: string;

  site_navigation_home:string;
  site_navigation_services:string;
  site_navigation_about_us:string;
  site_navigation_career:string;
  site_navigation_contact_us:string;

  banner_slide_1_heading:string;
  banner_slide_1_text:string;
  banner_slide_1_button_text:string;

  banner_slide_2_heading:string;
  banner_slide_2_text:string;
  banner_slide_2_button_text:string;

  banner_slide_3_heading:string;
  banner_slide_3_text:string;
  banner_slide_3_button_text:string;

  banner_slide_4_heading:string;
  banner_slide_4_text:string;
  banner_slide_4_button_text:string;


}
