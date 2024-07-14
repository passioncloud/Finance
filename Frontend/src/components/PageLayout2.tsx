import { DrawerProps } from "@fluentui/react-components";
import * as React from "react";
import {
    Hamburger,
    NavDrawer,
    NavDrawerBody,
    NavDrawerHeader,
    NavDrawerProps,
    NavItem,
} from "@fluentui/react-nav-preview";

import {
    Tooltip,
    makeStyles,
    tokens,
} from "@fluentui/react-components";
import {
    Board20Filled,
    Board20Regular,
    BoxMultiple20Filled,
    BoxMultiple20Regular,
    DataArea20Filled,
    DataArea20Regular,
    DocumentBulletListMultiple20Filled,
    DocumentBulletListMultiple20Regular,
    HeartPulse20Filled,
    HeartPulse20Regular,
    MegaphoneLoud20Filled,
    MegaphoneLoud20Regular,
    NotePin20Filled,
    NotePin20Regular,
    People20Filled,
    People20Regular,
    PeopleStar20Filled,
    PeopleStar20Regular,
    Person20Filled,
    PersonLightbulb20Filled,
    PersonLightbulb20Regular,
    Person20Regular,
    PersonSearch20Filled,
    PersonSearch20Regular,
    PreviewLink20Filled,
    PreviewLink20Regular,
    bundleIcon,
} from "@fluentui/react-icons";
import { Outlet, useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        overflow: "hidden",
        display: "flex",
        height: "100vh",
    },
    content: {
        flex: "1",
        padding: "16px",
        display: "grid",
        alignItems: "flex-start",
    },
    field: {
        display: "flex",
        marginTop: "4px",
        marginLeft: "8px",
        flexDirection: "column",
        gridRowGap: tokens.spacingVerticalS,
    },
});

const Person = bundleIcon(Person20Filled, Person20Regular);
const Dashboard = bundleIcon(Board20Filled, Board20Regular);
const Announcements = bundleIcon(MegaphoneLoud20Filled, MegaphoneLoud20Regular);
const EmployeeSpotlight = bundleIcon(
    PersonLightbulb20Filled,
    PersonLightbulb20Regular
);
const Search = bundleIcon(PersonSearch20Filled, PersonSearch20Regular);
const PerformanceReviews = bundleIcon(
    PreviewLink20Filled,
    PreviewLink20Regular
);
const JobPostings = bundleIcon(NotePin20Filled, NotePin20Regular);
const Interviews = bundleIcon(People20Filled, People20Regular);
const HealthPlans = bundleIcon(HeartPulse20Filled, HeartPulse20Regular);
const TrainingPrograms = bundleIcon(BoxMultiple20Filled, BoxMultiple20Regular);
const CareerDevelopment = bundleIcon(PeopleStar20Filled, PeopleStar20Regular);
const Analytics = bundleIcon(DataArea20Filled, DataArea20Regular);
const Reports = bundleIcon(
    DocumentBulletListMultiple20Filled,
    DocumentBulletListMultiple20Regular
);

type DrawerType = Required<DrawerProps>["type"];

export const PageLayout2 = (props: Partial<NavDrawerProps>) => {
    const styles = useStyles();
    const [isOpen, setIsOpen] = React.useState(true);
    const [type, setType] = React.useState<DrawerType>("inline");
    const location = useLocation()

    const isCurrent = (relativePath: string) => location.pathname.includes(relativePath)



    const renderHamburgerWithToolTip = () => {
        return (
            <Tooltip content="Navigation" relationship="label">
                <Hamburger onClick={() => setIsOpen(!isOpen)} />
            </Tooltip>
        );
    };

    return (
        <div className={styles.root}>
            <NavDrawer
                defaultSelectedValue="2"
                defaultSelectedCategoryValue="1"
                open={isOpen}
                type={type}
            >
                <NavDrawerHeader>{renderHamburgerWithToolTip()}</NavDrawerHeader>
                <NavDrawerBody>
                    <Link to='/customers'>
                        <NavItem value="1" icon={<Dashboard />}>
                            Customers
                        </NavItem>
                    </Link>
                    <Link to='/items'>
                        <NavItem value="1" icon={<Dashboard />}>
                            Items
                        </NavItem>
                    </Link>
                    <Link to='/invoices'>
                        <NavItem value="1" icon={<Dashboard />}>
                            Invoices
                        </NavItem>
                    </Link>
                    {/* <NavItem icon={<Search />} href={linkDestination} value="4">
                        Profile Search
                    </NavItem>
                    <NavItem
                        icon={<PerformanceReviews />}
                        href={linkDestination}
                        value="5"
                    >
                        Performance Reviews
                    </NavItem>

                    <NavSectionHeader>Employee Management</NavSectionHeader>
                    <NavCategory value="6">
                        <NavCategoryItem icon={<JobPostings />}>
                            Job Postings
                        </NavCategoryItem>
                        <NavSubItemGroup>
                            <NavSubItem href={linkDestination} value="7">
                                Openings
                            </NavSubItem>
                            <NavSubItem href={linkDestination} value="8">
                                Submissions
                            </NavSubItem>
                        </NavSubItemGroup>
                    </NavCategory>
                    <NavItem icon={<Interviews />} value="9">
                        Interviews
                    </NavItem>

       
                    <NavDivider />
                    <NavItem target="_blank" icon={<Analytics />} value="19">
                        Workforce Data
                    </NavItem>
                    <NavItem href={linkDestination} icon={<Reports />} value="20">
                        Reports
                    </NavItem> */}
                </NavDrawerBody>
            </NavDrawer>
            <div className={styles.content}>
                {!isOpen && renderHamburgerWithToolTip()}
                <Outlet />
            </div>
        </div>
    );
};