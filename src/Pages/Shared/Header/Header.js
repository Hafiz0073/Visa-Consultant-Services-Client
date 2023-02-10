import { Button, Navbar } from 'flowbite-react';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
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
                <div className="flex md:order-2">
                    <Link to='/login'> <Button gradientMonochrome="info">

                        login
                    </Button></Link>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/">
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/visacategories">
                        Visa Categories
                    </Navbar.Link>
                    <Navbar.Link href="/">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="/">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;