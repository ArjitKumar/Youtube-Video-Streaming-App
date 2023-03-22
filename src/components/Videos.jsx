import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
      // sx={{ border: "2px solid white" }}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {/* if item.id.videoID is present then its video and render video card  */}
          {item.id.videoId && <VideoCard video={item} />}
          {/* if item.id.videoID is not present in api and channelId is there then render a channel card*/}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
