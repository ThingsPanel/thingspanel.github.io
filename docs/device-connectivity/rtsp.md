---
sidebar_position: 7
---

# RTSP Camera

RTSP (Real Time Streaming Protocol) is a protocol used for real-time audio and video transmission, typically used in surveillance devices, video conferencing, and other scenarios.

RTSP access to ThingsPanel can be achieved through a pusher solution. The specific flowchart is as follows:

## Flowchart

![RTSP Flowchart](./image/rtsp.png)

A pusher is a hardware device. Its function, as shown in the figure, is to obtain RTSP video streams from multiple cameras and push them to the media server SRS. Then SRS distributes the video.

Search for "RTSP pusher" on e-commerce platforms to get relevant device information.

The pusher is deployed in the local area network and can directly access the RTSP video stream of the camera. Please follow the pusher's manual for deployment and installation methods.