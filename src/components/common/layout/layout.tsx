import React, { ReactNode, useEffect, useState } from 'react';
import {
    Anchor,
    AppShell,
    Burger,
    Divider,
    Drawer,
    Header,
    MediaQuery,
    Navbar,
    Space,
} from "@mantine/core";
import { useViewportSize } from '@mantine/hooks';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useStyles } from './layout.styles';
import logo from '@/assets/logo.png';
import { colors } from '@/constants/colors';
import whatsapp from '@/assets/whatsapp.png';


type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    const { classes } = useStyles();
    const [opened, setOpened] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const router = useRouter();

    const { width } = useViewportSize();

    const detectScrollY = () => {
        if (window.scrollY > 6) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", detectScrollY);
        return () => {
            window.removeEventListener("scroll", detectScrollY);
        }
    }, [])

    useEffect(() => {
        router.pathname === "/" ? setIsHome(true) : setIsHome(false)
    }, [router.pathname])


    return (
        <AppShell
            navbarOffsetBreakpoint="md"
            fixed
            header={
                <Header height={width > 768 ? 95 : 60} className={`${classes.headerBackground}`} withBorder={isHome ? true : false} style={{ boxShadow: isScrolled ? 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' : 'none' }}>
                    <MediaQuery largerThan="md" styles={{ display: "none" }}>
                        <div className={classes.burger}>
                            <Anchor href="/" ml="xl">
                                <Image
                                    src={logo}
                                    width={180}
                                    height={45}
                                    alt='logo'

                                />
                            </Anchor>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="md"
                                color={`${colors.primaryColor}`}
                                mr="xl"
                            />
                        </div>
                    </MediaQuery>
                    <div className={classes.header}>
                        <div className={classes.logo}>
                            <Anchor href="/">
                                <Image
                                    src={logo}
                                    width={250}
                                    height={50}
                                    alt='logo'
                                />

                            </Anchor>
                        </div>
                        <div className={classes.links} style={{ margin: "0 45px" }}>
                            <Anchor className={`${classes.navitem} ${router.pathname === "/" ? classes.active : ""}`} href="/">Home</Anchor>
                            <Anchor className={`${classes.navitem} ${router.pathname === "/about" ? classes.active : ""}`} href="/about">About Us</Anchor>
                            <Anchor className={`${classes.navitem} ${router.pathname === "/book-online" ? classes.active : ""}`} href="/book-online">Book Online</Anchor>
                            <Anchor className={`${classes.navitem} ${router.pathname === "/learning-resources" ? classes.active : ""}`} href="/learning-resources">Our Learning Resources</Anchor>
                            <Anchor className={`${classes.navitem} ${router.pathname === "/faq" ? classes.active : ""}`} href="/faq">FAQ</Anchor>
                            <Anchor className={`${classes.navitem} ${router.pathname === "/blogs" ? classes.active : ""}`} href="/blogs">Blogs</Anchor>
                            <Divider size="sm" orientation="vertical" mx="md" />
                            <div>
                            <Anchor className={`${classes.navitem} ${classes.contactUs} ${router.pathname === "/contact" ? classes.activeContactUs : ""}`} href="/contact">Contact Us</Anchor>
                            </div>
                        </div>
                    </div>
                </Header>}

            navbar={<Navbar
                width={{ base: "100%", sm: 0 }}
                hidden={!opened}
            >
                <Drawer
                    position='top'
                    opened={opened}
                    onClose={() => setOpened(false)}
                    overlayOpacity={0.55}
                    overlayBlur={3}
                    transition="rotate-left"
                    transitionDuration={250}
                    transitionTimingFunction="ease"
                    closeButtonLabel={"close"}
                >
                    <Divider mb="md" />
                    <div className={classes.navbar}>
                        <Anchor className={`${classes.navitem} ${router.pathname === "/" ? classes.active : ""}`} href="/">Home</Anchor>
                        <Space h="xs" />
                        <Anchor className={`${classes.navitem} ${router.pathname === "/about" ? classes.active : ""}`} href="/about">About Us</Anchor>
                        <Space h="xs" />
                        <Anchor className={`${classes.navitem} ${router.pathname === "/book-online" ? classes.active : ""}`} href="/book-online">Book Online</Anchor>
                        <Space h="xs" />
                        <Anchor className={`${classes.navitem} ${router.pathname === "/learning-resources" ? classes.active : ""}`} href="/learning-resources">Our Learning Resources</Anchor>
                        <Space h="xs" />
                        <Anchor className={`${classes.navitem} ${router.pathname === "/faq" ? classes.active : ""}`} href="/faq">FAQ</Anchor>
                        <Space h="xs" />
                        <Anchor className={`${classes.navitem} ${router.pathname === "/blogs" ? classes.active : ""}`} href="/blogs">Blogs</Anchor>
                        <div style={{ marginTop: 20, marginLeft: 5 }}>
                            <Anchor className={`${classes.navitem} ${classes.contactUs} ${router.pathname === "/contact" ? classes.activeContactUs : ""}`} href="/contact">Contact Us</Anchor>
                        </div>
                    </div>
                </Drawer>
            </Navbar>}
        >
            <Anchor className={classes.whatsapp} href='https://wa.me/254703519593?text=Hello%2C%20I%20am%20interested%20in%20Atego' target='_blank'>
                <Image
                    src={whatsapp}
                    height={60}
                    width={60}
                    alt="whatsapp icon"
                />
            </Anchor>
            {children}
        </AppShell>
    );
}

export default Layout;