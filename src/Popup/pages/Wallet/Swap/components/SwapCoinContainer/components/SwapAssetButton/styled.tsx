import { styled } from '@mui/material/styles';

export const StyledButton = styled('button')(({ theme }) => ({
  border: 'none',

  width: '14.4rem',
  height: '2.8rem',

  borderRadius: '0.8rem',
  '&:disabled': {
    backgroundColor: theme.colors.base03,
    '&:hover': {
      backgroundColor: theme.colors.base03,
    },
  },
  backgroundColor: theme.colors.base01,
  color: theme.accentColors.white,

  padding: '0',

  textAlign: 'left',

  '&:hover': {
    backgroundColor: theme.colors.base04,
  },

  cursor: 'pointer',
}));

export const ContentContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  paddingLeft: '0.8rem',
});
export const ContentLeftContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ContentLeftImageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  marginRight: '0.4rem',

  width: '1.6rem',
  height: '1.6rem',
  position: 'relative',
});

export const ContentLeftAbsoluteImageContainer = styled('div')({
  position: 'absolute',

  width: '1.6rem',
  height: '1.6rem',

  '& > img': {
    width: '1.6rem',
    height: '1.6rem',
  },
});

export const ContentCenterTextContainer = styled('div')(({ theme }) => ({
  color: theme.colors.text01,
  maxWidth: '8rem',

  wordBreak: 'keep-all',
  whiteSpace: 'nowrap',

  '& > *': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

type ContentPlaceholderContainerProps = {
  'data-is-disabled': boolean;
};

export const ContentPlaceholderContainer = styled('div')<ContentPlaceholderContainerProps>(({ theme, ...props }) => ({
  color: props['data-is-disabled'] ? theme.colors.text02 : theme.colors.text01,
}));

export const ContentRightImageContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '0 0.4rem',

  '& > svg': {
    width: '1.6rem',
    height: '1.6rem',

    fill: theme.colors.base05,
  },
}));
