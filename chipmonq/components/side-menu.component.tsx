import {
  ProjectOutlined,
  ShopOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { Organisation } from '../domain/models';

interface SideMenuProps {
  organisations: Organisation[];
}
export function SideMenu(props: SideMenuProps) {
  const router = useRouter();

  // const orgs = organisations || [];
  const orgs = props.organisations;

  const selectedMenu = [router.pathname];

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultOpenKeys={['/organisations']}
      defaultSelectedKeys={selectedMenu}
    >
      <Menu.Item
        key="/home"
        onClick={() => router.push('/home')}
        icon={<UserOutlined />}
      >
        Home
      </Menu.Item>
      <Menu.Item
        key="/my-profile"
        onClick={() => router.push('/my-profile')}
        icon={<VideoCameraOutlined />}
      >
        My profile
      </Menu.Item>
      <Menu.Item
        key="/project/mine"
        onClick={() => router.push('/project/mine')}
        icon={<ProjectOutlined />}
      >
        My projects
      </Menu.Item>
      <Menu.SubMenu
        key="/organisations"
        icon={<ShopOutlined />}
        title="Organisations"
      >
        {orgs.map((o) => (
          <Menu.Item
            onClick={() => router.push(`/organisation/${o.id}`)}
            key={`/organisation/${o.id}`}
          >
            {o.name}
          </Menu.Item>
        ))}
        <Menu.Item
          onClick={() => router.push('/organisation/create')}
          key="/organisation/create"
        >
          + Create new
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item
        key="/search/tech"
        onClick={() => router.push('/search/tech')}
        icon={<UploadOutlined />}
      >
        Search
      </Menu.Item>
    </Menu>
  );
}
