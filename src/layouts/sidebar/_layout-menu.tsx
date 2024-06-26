import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Logo from '@/components/ui/logo';
import Button from '@/components/ui/button';
import { Menu } from '@/components/ui/menu';
import { Transition } from '@/components/ui/transition';
import ActiveLink from '@/components/ui/links/active-link';
import Scrollbar from '@/components/ui/scrollbar';
import { Close } from '@/components/icons/close';
import { useDrawer } from '@/components/drawer-views/context';
import { ChevronDown } from '@/components/icons/chevron-down';
import { MenuItem } from '@/components/ui/collapsible-menu';
import { menuItems } from '@/layouts/sidebar/_menu-items';

export function MenuItems() {
  const router = useRouter();
  const {
    query: { layout },
  } = router;
  return (
    <div className="flex items-center xl:px-10 2xl:px-14 3xl:px-16">
      {menuItems.map((item, index) => (
        <Fragment key={'layout' + item.name + index}>
          <ActiveLink
            href={{
              pathname: item.href,
            }}
            className="mx-3 text-[13px] font-medium uppercase text-gray-300 transition first:ml-0 last:mr-0 hover:text-white 2xl:mx-3 2xl:text-sm 3xl:mx-4"
            activeClassName="!text-white"
          >
            {item.name}
          </ActiveLink>
        </Fragment>
      ))}
    </div>
  );
}

export default function DrawerMenu() {
  const { closeDrawer } = useDrawer();
  return (
    <div className="relative w-full max-w-full bg-dark xs:w-80">
      <div className="flex h-24 items-center justify-between overflow-hidden px-6 py-4">
        <Logo />
        <div className="md:hidden">
          <Button
            title="Close"
            color="white"
            shape="circle"
            variant="transparent"
            size="small"
            onClick={closeDrawer}
          >
            <Close className="h-auto w-2.5" />
          </Button>
        </div>
      </div>
      <Scrollbar style={{ height: 'calc(100% - 96px)' }}>
        <div className="px-6 pb-14 2xl:px-8">
          <div className="mt-2 sm:mt-4 md:mt-8 lg:mt-12">
            {menuItems.map((item, index) => (
              <MenuItem
                key={'drawer' + item.name + index}
                name={item.name}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </Scrollbar>
    </div>
  );
}
