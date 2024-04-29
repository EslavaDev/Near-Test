import {forwardRef} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import {Box} from '@mui/material';
import {ImageProps} from "./types";


const Image = forwardRef<HTMLSpanElement, ImageProps>(
    ({ratio, disabledEffect = false, effect = 'blur', sx, ...other}, ref) => {
        const content = (
            <Box
                component={LazyLoadImage}
                wrapperClassName="wrapper"
                effect={disabledEffect ? undefined : effect}
                placeholderSrc={disabledEffect ? '/assets/transparent.png' : '/assets/placeholder.svg'}
                sx={{width: 1, height: 1, objectFit: 'cover'}}
                {...other}
            />
        );

        return (
            <Box
                ref={ref}
                component="span"
                sx={{
                    lineHeight: 1,
                    display: 'block',
                    overflow: 'hidden',
                    position: 'relative',
                    '& .wrapper': {
                        width: 1,
                        height: 1,
                        backgroundSize: 'cover !important',
                    },
                    ...sx,
                }}
            >
                {content}
            </Box>
        );
    }
);

export default Image;
