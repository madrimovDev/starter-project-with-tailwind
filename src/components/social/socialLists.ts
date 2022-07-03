import { FacebookOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons"

type SocialListsType = {
  icon: any, 
  href: string
}

const socialLists: SocialListsType[] = [
  {
    icon: FacebookOutlined,
    href: ""
  },
  {
    icon: InstagramOutlined,
    href: "",
  }, 
  {
    icon: GithubOutlined,
    href: ""
  },
  {
    icon: LinkedinOutlined,
    href: ""
  },
  {
    icon: TwitterOutlined,
    href: ''
  }
]

export default socialLists