---
sidebar_position: 6
---

# Cluster Deployment

## Cluster Deployment Architecture

```mermaid
flowchart TB
    %% External Connections
    devices["IoT Devices<br>(MQTT/HTTP/CoAP)"]
    users["Users/Apps<br>(Web/API Access)"]

    %% Load Balancer Layer
    subgraph LB["Load Balancing Layer"]
        lb["LB Cluster<br>(Nginx/HAProxy)"]
    end

    %% Message Broker Layer
    subgraph MB["Message Broker Layer"]
        mqtt1["MQTT Broker Node 1<br>(VerneMQ)"]
        mqtt2["MQTT Broker Node 2<br>(VerneMQ)"]
        mqtt3["MQTT Broker Node N<br>(VerneMQ)"]
        webhook1["Webhook Service 1"]
        webhook2["Webhook Service 2"]
        webhook3["Webhook Service N"]
    end

    %% Application Layer
    subgraph APP["Application Layer"]
        subgraph TP1["App Node 1"]
            api1["Backend API"]
            tdengine1["TSDB Service"]
        end
        subgraph TP2["App Node 2"]
            api2["Backend API"]
            tdengine2["TSDB Service"]
        end
        subgraph TP3["App Node N"]
            api3["Backend API"]
            tdengine3["TSDB Service"]
        end
    end

    %% Cache Layer
    subgraph CACHE["Cache Layer"]
        redis1["Redis Master"]
        redis2["Redis Slave 1"]
        redis3["Redis Slave N"]
    end

    %% Database Layer
    subgraph DB["Database Layer"]
        td["TSDB Cluster<br>(TDengine)"]
        pg["Meta DB Cluster<br>(PostgreSQL/TimescaleDB)"]
    end

    %% Connections
    devices --> lb
    users --> lb
    lb --> mqtt1 & mqtt2 & mqtt3
    lb --> api1 & api2 & api3
    
    mqtt1 <--> mqtt2 <--> mqtt3
    mqtt1 --- webhook1
    mqtt2 --- webhook2
    mqtt3 --- webhook3
    
    mqtt1 --> tdengine1
    mqtt2 --> tdengine2
    mqtt3 --> tdengine3
    
    api1 --- tdengine1
    api2 --- tdengine2
    api3 --- tdengine3
    
    tdengine1 & tdengine2 & tdengine3 --> td
    
    api1 & api2 & api3 --> redis1
    redis1 --> redis2 & redis3
    
    api1 & api2 & api3 --> pg
    api1 & api2 & api3 --> td

    %% Styles
    classDef default fill:#f9f9f9,stroke:#333,stroke-width:1px
    classDef external fill:#f0f0f0,stroke:#666,stroke-width:1px
    classDef layer fill:#e6f3ff,stroke:#333,stroke-width:2px
    
    class devices,users external
    class LB,MB,APP,CACHE,DB layer
```

## 1. Overall Architecture

ThingsPanel adopts a layered architecture design, divided from top to bottom into Load Balancing Layer, Message Broker Layer, Application Layer, Cache Layer, and Database Layer. This layered architecture features high availability, scalability, and maintainability.

## 2. Detailed Layer Description

### 2.1 Access Layer

- **Device Onboarding**
  - Supports multiple protocols: MQTT, HTTP, CoAP
  - Supports massive concurrent device connections
  - Supports device authentication and security mechanisms

- **User Access**
  - Supports Web interface access
  - Provides standard REST API interfaces
  - Supports various client application integrations

### 2.2 Load Balancing Layer

- **Components**: Nginx/HAProxy Cluster
- **Functions**:
  - Implements load balancing for connections
  - Guarantees high availability
  - Supports horizontal scaling
  - Traffic control and security protection

### 2.3 Message Broker Layer

- **MQTT Broker Nodes (VerneMQ)**
  - Supports cluster deployment
  - Data synchronization between nodes
  - Real-time forwarding of device messages
  - Supports QoS guarantees

- **Webhook Service**
  - Tightly integrated with MQTT Broker
  - Provides message pre-processing capabilities
  - Supports custom message processing logic

### 2.4 Application Layer

- **Backend API Service**
  - Device Management
  - User Permission Management
  - Alert Management
  - Data Visualization

- **TSDB Service**
  - Efficient storage of device data
  - Data cleaning and transformation
  - Data analysis and processing
  - Historical data management

### 2.5 Cache Layer

- **Redis Cluster**
  - Uses Master-Slave architecture
  - Provides high-speed data caching
  - Supports session management
  - Improves system response speed

### 2.6 Database Layer

- **Time-Series Database (TDengine)**
  - Optimized for IoT data characteristics
  - High-performance data storage and query
  - Supports data compression
  - Provides data retention policies

- **Meta Database (PostgreSQL/TimescaleDB)**
  - Stores business metadata
  - Device configuration information
  - User and permission data
  - Supports complex business queries

## 3. System Characteristics

### 3.1 High Availability

- All layers support cluster deployment
- Designed with no single point of failure
- Service automatic fault tolerance and recovery
- Multi-replica data storage

### 3.2 Scalability

- Supports horizontal scaling
- Layers can be scaled independently
- Flexible node addition/removal
- Dynamic load balancing

### 3.3 Security

- Device onboarding security authentication
- Data transmission encryption
- User access permission control
- Multi-layer security protection

### 3.4 Maintainability

- Decoupled component design
- Easy issue localization
- Supports online upgrades
- Comprehensive monitoring and alerting

## 4. Deployment Recommendations

### 4.1 Small Scale Deployment (`<10k` Devices)

- Minimal component deployment
- Single node deployment is sufficient
- Recommended Config:
  - 2 Core 4GB+ Server
  - 100GB+ Storage

### 4.2 Medium Scale Deployment (10k-100k Devices)

- Recommended Dual-Node Cluster deployment
- Redundant backup for key components
- Recommended Config:
  - 4 Core 8GB+ Server
  - 500GB+ Storage

### 4.3 Large Scale Deployment (`>100k` Devices)

- Full Component Cluster deployment
- Cross-AZ Disaster Recovery
- Recommended Config:
  - 8 Core 16GB+ Server
  - 1TB+ Storage
  - Scale nodes based on actual demand

## 5. Scalability Recommendations

- Reserve over 50% performance margin
- Plan expansion in stages
- Monitor data storage capacity
- Perform regular performance assessments
