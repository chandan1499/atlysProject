export interface PostContainerProps {
    proficSrc: string;
    userName: string;
    postTime: string;
    postContent: string;
    commentsCount: number;
}

export const calculateTimeAgo = (postTime: string): string => {
    const currentDate = new Date();
    const pastDate = new Date(postTime);

    const elapsedMilliseconds = currentDate.getTime() - pastDate.getTime();
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    const elapsedDays = Math.floor(elapsedHours / 24);

    if (elapsedDays > 0) {
        return `${elapsedDays} day${elapsedDays === 1 ? '' : 's'} ago`;
    } else if (elapsedHours > 0) {
        return `${elapsedHours} hour${elapsedHours === 1 ? '' : 's'} ago`;
    } else if (elapsedMinutes > 0) {
        return `${elapsedMinutes} minute${elapsedMinutes === 1 ? '' : 's'} ago`;
    } else {
        return `${elapsedSeconds} second${elapsedSeconds === 1 ? '' : 's'} ago`;
    }
}
