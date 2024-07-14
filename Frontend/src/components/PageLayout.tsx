import { Outlet, useLocation } from "react-router-dom";
import { SidebarLayout } from "./catalyst/sidebar-layout";
import { Sidebar, SidebarBody, SidebarFooter, SidebarHeader, SidebarItem, SidebarLabel, SidebarSection } from "./catalyst/sidebar";
import { Avatar } from "./catalyst/avatar";
import { ArrowRightStartOnRectangleIcon, ChevronUpIcon, HomeIcon } from "@heroicons/react/20/solid";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";
import { Dropdown, DropdownButton, DropdownItem, DropdownLabel, DropdownMenu } from "./catalyst/dropdown";
import Breadcrumbs from "./Breadcrumbs";
import keycloakService from "../keycloak-service";



export default function PageLayout() {
    const email = keycloakService.kc.idTokenParsed?.email
    const location = useLocation()

    const isCurrent = (relativePath: string) => location.pathname.includes(relativePath)
    const username = keycloakService.getUsername()

    async function handleSignout() {
       keycloakService.doLogout()
    }
    return (
        <div>
            <SidebarLayout
                
                navbar={null}
                sidebar={
                    <Sidebar>
                        <SidebarHeader>
                            <div>
                                {/* <img src="/logo.png" className="h-20"/> */}
                                <h1 className="text-center p-4"><b>POS</b></h1>
                            </div>
                        </SidebarHeader>
                        <SidebarBody>
                            <SidebarSection>
                                {/* <SidebarItem href="/employees" current={isCurrent("/employees")}>
                                    <CurrencyDollarIcon />
                                    <SidebarLabel>Employees</SidebarLabel>
                                </SidebarItem> */}
                                <SidebarItem href="/customers" current={isCurrent("/customers")}>
                                    <CurrencyDollarIcon />
                                    <SidebarLabel>Customers</SidebarLabel>
                                </SidebarItem>
                                <SidebarItem href="/items" current={isCurrent("/items")}>
                                    <CurrencyDollarIcon />
                                    <SidebarLabel>Items</SidebarLabel>
                                </SidebarItem>
                                <SidebarItem href="/invoices" current={isCurrent("/invoices")}>
                                    <CurrencyDollarIcon />
                                    <SidebarLabel>Invoices</SidebarLabel>
                                </SidebarItem>
                                <SidebarItem href="/users" current={isCurrent("/users")} >
                                    <BellIcon />
                                    <SidebarLabel>Users</SidebarLabel>
                                </SidebarItem>
                            </SidebarSection>
                        </SidebarBody>
                        <SidebarFooter>
                            <Dropdown>
                                <DropdownButton as={SidebarItem}>
                                    <span className="flex min-w-0 items-center gap-3">
                                       <span className="min-w-0">
                                            <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                                                {  username }
                                            </span>
                                            <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                                                { email}
                                            </span>
                                        </span>
                                    </span>
                                    <ChevronUpIcon />
                                </DropdownButton>
                                <DropdownMenu className="min-w-64" anchor="top start">
                                    <DropdownItem onClick={handleSignout}>
                                        <ArrowRightStartOnRectangleIcon />
                                        <DropdownLabel>Sign out</DropdownLabel>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </SidebarFooter>
                    </Sidebar>
                }
            >
                <Outlet />
            </SidebarLayout>
        </div>
    )
}


