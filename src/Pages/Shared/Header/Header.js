import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthCOntext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthCOntext)
    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div>
            <div>
                <Navbar
                    fluid={true}
                    rounded={true}
                >
                    <Navbar.Brand href="/">
                        <img
                            src="https://abwingsbd.com/images/abwingsbd-logo.png"
                            className="mr-3 h-6 sm:h-9"
                            alt="Hafiz visa consultant Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            H Consultant
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link
                            href="/"
                            active={true}
                        >
                            Home
                        </Navbar.Link>
                        <Navbar.Link href="/visacategories">
                            Visa Categories
                        </Navbar.Link>
                        <Navbar.Link href="/blogs">
                            Blogs
                        </Navbar.Link>
                        {
                            user?.email ?
                                <>
                                    <Link to='/myreviews'>My Reviews</Link>
                                    <Link to='/add-category'>Add Service</Link>
                                    <Button onClick={handleLogout} gradientMonochrome="info">

                                        logOut
                                    </Button>
                                </>
                                :
                                <Link to='/login'> <Button gradientMonochrome="info">

                                    login</Button></Link>
                        }

                        {user?.email ?

                            <div className="flex md:order-2">
                                <Dropdown
                                    arrowIcon={false}
                                    inline={true}
                                    label={user.name}
                                >
                                    <Dropdown.Header>
                                        <span className="block text-sm">
                                            {user.displayName}
                                        </span>
                                        <span className="block truncate text-sm font-medium">
                                            {user.email}
                                        </span>
                                    </Dropdown.Header>
                                    <Dropdown.Item>
                                        Dashboard
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Settings
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item>
                                        <Button onClick={handleLogout} gradientMonochrome="info">

                                            logOut
                                        </Button>
                                    </Dropdown.Item>
                                </Dropdown>
                                <Navbar.Toggle />
                            </div>
                            : <div className="flex flex-wrap gap-2">
                                <Avatar rounded={true} />
                            </div>
                        }
                    </Navbar.Collapse>
                </Navbar>

            </div>

        </div>
    );
};

export default Header;