import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {locales} from './locale-config';
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});