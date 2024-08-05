import React from 'react'
import FooterSocialLink from '../FooterSocialLink/FooterSocialLink'
import './FooterSocialLinkList.css'

const FooterSocialLinkList = ({
  socialLinks = []
}) => {
  const generateSocialLinks = socialLinks.map(link => (
    <FooterSocialLink
      key={link.id}
      id={link.id}
      pathToProfile={link.pathToProfile}
      platform={link.platform}
    />
  ))

  return (
    <ul className='Footer__social-link-list'>
      {generateSocialLinks}
    </ul>
  ) 
}

export default FooterSocialLinkList