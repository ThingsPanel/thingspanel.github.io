---
sidebar_position: 4
---

# Hikvision iSecure Center Integration

This article introduces how to quickly access device resources from Hikvision Integrated Security Management Platform (iSecure Center) to the ThingsPanel platform.

## Introduction to iSecure Center

Hikvision Integrated Security Management Platform (iSecure Center) is an advanced security management system developed by Hikvision.

It can centrally manage various security subsystems, including video surveillance, access control, and alarms. In terms of video surveillance, it allows real-time preview, storage playback, and video quality diagnosis. Access control management supports authorization, record query, and permission settings. Alarm management can receive and process information from various alarm devices and realize linkage.

The platform also features intelligent applications, including face recognition, behavior analysis, and other intelligent analysis functions, as well as data statistical analysis. Moreover, it can unify device and user management and support task scheduling.

The platform has good openness and extensibility, providing interfaces and protocols for easy integration with third-party systems, enabling on-demand addition of functions and modules. In this case, we will connect it to the ThingsPanel IoT platform to achieve richer functional integration.

## Integration Process

### Prerequisites

1. Get the Partner Key and Partner Secret (AKA APPKey and APPSecret) from the Operations Center of the Hikvision iSecure Center. ![alt text](img-isc/image.png)
2. Deploy ThingsPanel platform and register the iSecureCenter third-party device connectivity service in ThingsPanel. ![alt text](img-isc/image1.png)

### Steps

1. First, create a device template and select the registered iSecureCenter third-party device connectivity service. ![alt text](img-isc/image-0.png)
2. Select the registered service in Service Access. ![alt text](img-isc/image-1.png)
3. Add a new Access Point. ![alt text](img-isc/image-2.png)
4. Select the devices to add from this access point. ![alt text](img-isc/image-3.png)
5. Add a video player card in the dashboard, configure the device, and you can view the video.
![alt text](img-isc/image-4.png)

## Code Repository

This device connectivity service is an enterprise version feature.
