declare module 'react-simple-icons' {
  import { SVGProps } from 'react'
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number
    color?: string
    title?: string
  }
  
  export const SiTwitter: React.FC<IconProps>
  export const SiLinkedin: React.FC<IconProps>
  export const SiInstagram: React.FC<IconProps>
}