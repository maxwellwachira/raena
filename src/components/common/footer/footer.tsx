import { Text, Container, ActionIcon, Group, TextInput, Button, Stack, Anchor } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import Image from 'next/image';
import { useStyles } from './footer.styles';
import logo from '@/assets/logo.png';
import { colors } from '@/constants/colors';
import facebookIcon from '@/assets/facebook.png';
import instagramIcon from '@/assets/instagram.png';
import twitterIcon from '@/assets/twitter.png';
import linkedinIcon from '@/assets/linkedin.png';


interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

function Footer({ data }: FooterLinksProps) {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        target='_blank'
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} size="lg">
        <div className={classes.logo}>
          <Stack align="center">
            <Image
              src={logo}
              width={248}
              height={48}
              alt='logo'
            />
            <Text>Subscribe to our news</Text>
            <TextInput
              placeholder={` Enter Your Email`}
              rightSection={<Button radius={"md"} size="md" type="submit" style={{ background: `${colors.primaryColor}` }}>Subscribe</Button>}
              radius="md"
              size="md"
            />
          </Stack>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter} size="lg">
        <Text color="dimmed" size="sm">
          © 2023 Raena Learning. All rights reserved.
        </Text>

        <Group spacing={20} className={classes.social} position="right" noWrap>
          <Text color="dimmed" size="sm">Follow Us</Text>
          <Anchor href="https://www.instagram.com/raenalearning/" target="_blank">
            <Image 
              src={instagramIcon}
              width={20}
              height={20}
              alt="Instagram"
            />
          </Anchor>
          <Anchor href="https://www.facebook.com/raenalearning.centre" target="_blank">
            <Image 
              src={facebookIcon}
              width={20}
              height={20}
              alt="Facebook"
            />
          </Anchor>
          <Anchor href="https://twitter.com/learningRaena" target="_blank">
            <Image 
              src={twitterIcon}
              width={20}
              height={20}
              alt="Twitter"
            />
          </Anchor>
          <Anchor href="https://www.linkedin.com/in/naomi-wanjagua-22195419a/" target="_blank">
            <Image 
              src={linkedinIcon}
              width={20}
              height={20}
              alt="Linkedin"
            />
          </Anchor>
        </Group>
      </Container>
    </footer>
  );
}

export default Footer;