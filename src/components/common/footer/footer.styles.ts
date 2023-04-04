import { createStyles } from "@mantine/core";

import { colors } from "@/constants/colors";

export const useStyles = createStyles((theme) => ({
    footer: {
      marginTop: 100,
      paddingTop: theme.spacing.xl * 2,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3]
      }`,
    },
  
    logo: {
      maxWidth: 280,
  
      [theme.fn.smallerThan('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  
    description: {
      marginTop: 5,
  
      [theme.fn.smallerThan('sm')]: {
        marginTop: theme.spacing.xs,
        textAlign: 'center',
      },
    },
  
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
  
      [theme.fn.smallerThan('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  
    groups: {
      display: 'flex',
      flexWrap: 'wrap',
  
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    wrapper: {
      width: 160,
    },
  
    link: {
      display: 'block',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      paddingTop: 3,
      paddingBottom: 3,
  
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  
    title: {
      fontSize: 18,
      fontWeight: 500,
      marginBottom: theme.spacing.xs / 2,
      color: `${colors.primaryColor}`
    },
  
    afterFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.spacing.xl,
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
  
      [theme.fn.smallerThan('sm')]: {
        flexDirection: 'column',
      },
    },
  
    social: {
      [theme.fn.smallerThan('sm')]: {
        
        ginTop: theme.spacing.xs,
      },
    },
  }));