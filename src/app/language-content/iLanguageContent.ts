
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
  common_address_line_1:string;
  common_address_line_2:string;
  common_address_city:string;
  common_address_country:string;
  common_phone:string;
  common_email:string;
  common_cookies_info:string;
  common_close:string;
  common_read_more:string;


  site_navigation_home: string;
  site_navigation_services: string;
  site_navigation_about_us: string;
  site_navigation_career: string;
  site_navigation_contact_us: string;

  banner_slide_1_heading: string;
  banner_slide_1_text: string;
  banner_slide_1_button_text: string;

  banner_slide_2_heading: string;
  banner_slide_2_text: string;
  banner_slide_2_button_text: string;

  banner_slide_3_heading: string;
  banner_slide_3_text: string;
  banner_slide_3_button_text: string;

  banner_slide_4_heading: string;
  banner_slide_4_text: string;
  banner_slide_4_button_text: string;

  about_page_heading: string;
  about_heading: string;
  about_sub_heading_1: string;
  about_sub_heading_1_text: string;

  about_sub_heading_2: string;
  about_sub_heading_2_text: string;

  about_sub_heading_3: string;
  about_sub_heading_3_text: string;

  about_sub_heading_4: string;
  about_sub_heading_4_head_text_1: string;
  about_sub_heading_4_text_1: string;
  about_sub_heading_4_head_text_2: string;
  about_sub_heading_4_text_2: string;
  about_sub_heading_4_head_text_3: string;
  about_sub_heading_4_text_3: string;
  about_sub_heading_4_head_text_4: string;
  about_sub_heading_4_text_4: string;
  about_sub_heading_4_head_text_5: string;
  about_sub_heading_4_text_5: string;

 
  whyUs_heading: string;
  whyUs_sub_heading_head_text_1: string;
  whyUs_sub_heading_text_1: string;
  whyUs_sub_heading_head_text_2: string;
  whyUs_sub_heading_text_2: string;
  whyUs_sub_heading_head_text_3: string;
  whyUs_sub_heading_text_3: string;
  whyUs_sub_heading_head_text_4: string;
  whyUs_sub_heading_text_4: string;
  whyUs_sub_heading_head_text_5: string;
  whyUs_sub_heading_text_5: string;

  services_page_heading: string;
  services_heading: string;
  services_sub_heading_head_text_1: string;
  services_sub_heading_text_1: string;
  services_sub_heading_head_text_2: string;
  services_sub_heading_text_2: string;
  services_sub_heading_head_text_3: string;
  services_sub_heading_text_3: string;
  services_sub_heading_head_text_4: string;
  services_sub_heading_text_4: string;

  footer_sub_heading_head_text_1: string;
  footer_sub_heading_text_1: string;
  footer_sub_heading_head_text_2: string;
  footer_sub_heading_head_text_3: string;

  career_page_heading: string;
  career_option_AI_ML_heading:string;
  career_option_web_heading:string;
  career_option_mobile_heading:string;
  career_option_not_open_position_message:string;

  capability_1_title:string;
  capability_1_shortDiscription:string;

  capability_2_title:string;
  capability_2_shortDiscription:string;

  capability_3_title:string;
  capability_3_shortDiscription:string;

  capability_4_title:string;
  capability_4_shortDiscription:string;

  capability_5_title:string;
  capability_5_shortDiscription:string;

  capability_6_title:string;
  capability_6_shortDiscription:string;

  capability_7_title:string;
  capability_7_shortDiscription:string;

  capability_8_title:string;
  capability_8_shortDiscription:string;

}
