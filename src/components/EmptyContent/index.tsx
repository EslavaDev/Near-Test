import { Typography, Stack, StackProps } from '@mui/material';
import Image from '../Image';
import NoDataImage from '../../assets/empty_content.svg';



interface EmptyContentProps extends StackProps {
    title: string;
    img?: string;
    description?: string;
    heighImage?: number;
    mbImage?: number;
    spacingStack?: number[];
}

export default function EmptyContent({
                                         heighImage = 240,
                                         spacingStack = [8, 2],
                                         mbImage = 3,
                                         title,
                                         description,
                                         img,
                                         sx,
                                         ...other
                                     }: EmptyContentProps) {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
                height: 1,
                textAlign: 'center',
                p: (theme) => theme.spacing(spacingStack[0], spacingStack[1]),
                ...sx,
            }}
            {...other}
        >
            <Image
                disabledEffect
                alt="empty content"
                src={img || NoDataImage}
                sx={{ height: heighImage, mb: mbImage }}
            />

            <Typography variant="h5" gutterBottom fontWeight="bold">
                {title}
            </Typography>

            {description && (
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            )}
        </Stack>
    );
}
