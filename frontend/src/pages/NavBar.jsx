import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon} from '@heroicons/react/24/outline'
const navigationItem =[
    {name:"SALES APP", href:"#"},
    {name:"ADD SALES", href:"#"},
    {name:"TOP 5 SALES", href:"#"},
    {name:"TODAY'S TOTAL REVENUE",href:"#"},
    {name:"LOGIN", href:"#"},
    {name:"REGISTER", href:"#"},
    {name:"LOGOUT", href:"#"}
  ]
  
const NavBar = () => {
    return (
        <Disclosure as="nav" className="bg-blue-500 text-white text-2xl">
        <div className="hidden md:block space-x-6 p-6">
         {navigationItem.map((navItem) => (
           <a
           key={navItem.name}
           href={navItem.href}
           >{navItem.name}</a>
         ))}
   
        </div>
       <Menu as="div" className="flex flex-col p-4 space-y-4 md:hidden">
      <div className="flex justify-between">
      <span>SALES</span>
   <MenuButton className="relative focus:ring-white">
     <Bars3Icon className="h-8 w-8 rounded-md"/>
   </MenuButton>
      </div>
     <MenuItems transition className="flex flex-col space-y-6">
      <MenuItem>
      <a href="#">
       ADD SALES
      </a>
      </MenuItem>
      <MenuItem>
      <a href="#">
       TOP 5 SALES
      </a>
      </MenuItem>
      <MenuItem>
      <a href="#">
       TODAY'S TOTAL REVENUE
      </a>
      </MenuItem>
      <MenuItem>
      <a href="#">
       LOGIN
      </a>
      </MenuItem>
      <MenuItem>
      <a href="#">
       REGISTER
      </a>
      </MenuItem>
      <MenuItem>
      <a href="#">
       LOGOUT
      </a>
      </MenuItem>
     
     </MenuItems>
   
   
   </Menu>
       </ Disclosure>
       
    );
}

export default NavBar;
