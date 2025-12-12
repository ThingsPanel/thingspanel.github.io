---
sidebar_position: 4
---

# Performance Test Report

## Comprehensive Performance Analysis Report on Raspberry Pi

### Conclusion

**ThingsPanel can run stably on a Raspberry Pi with 2GB RAM, making it suitable for small to medium-scale IoT application scenarios.** Tests indicate that the system can handle continuous writing of approximately 700 data points per second, which is sufficient to stably support 5 devices reporting every 100ms, or **20,000 temperature and humidity sensors reporting data at a 1-minute frequency**. **The main performance bottleneck is Storage I/O, not CPU or Memory**, especially when using a standard Class 10 TF card. By optimizing the storage medium (e.g., using an A2-rated SD card or external SSD), system performance has room for a 10-30x improvement. Overall, Raspberry Pi is a cost-effective choice for deploying ThingsPanel, providing a viable solution for Edge Computing IoT applications.

### Test Methodology

This test combined multi-dimensional resource monitoring with actual load testing to comprehensively evaluate ThingsPanel's performance on Raspberry Pi:

1.  **System Resource Monitoring**:
    *   Used custom script `monitor_thingspanel.sh` to monitor CPU, memory, and component usage in real-time.
    *   Used `pg_io_monitor.sh` specifically to monitor disk I/O performance, focusing on database partitions.
    *   Sampling interval of 1 second.

2.  **Load Testing**:
    *   Simulated 10 concurrent IoT device connections, sending data to the system via MQTT protocol.
    *   Target data transmission rate was approx. 989 points/sec, lasting for 200 cycles.
    *   Verified data write success rate and performance via database queries.

3.  **Performance Analysis**:
    *   Compared resource usage differences between idle and loaded states.
    *   Identified system bottleneck points and their impact.
    *   Analyzed resource consumption characteristics of components (PostgreSQL, Redis, GMQTT, etc.).

### Test Environment

*   **Hardware Platform**:
    *   Raspberry Pi 4
    *   CPU: 4-Core ARM Processor (aarch64)
    *   Memory: 1849MB (~2GB)
    *   Storage: Class 10 TF Card, Root partition usage ~94%

*   **Software Environment**:
    *   OS: Raspbian GNU/Linux 11 (bullseye)
    *   ThingsPanel Components:
        *   PostgreSQL/TimescaleDB (Docker)
        *   Redis (Docker)
        *   GMQTT (PM2 managed)
        *   Backend API (PM2 managed)
        *   Nginx (System Service)

*   **Test Tools**:
    *   Custom Resource Monitoring Scripts
    *   MQTT Performance Test Client (Go)
    *   DB Monitoring Query Scripts

### Resource Usage Summary

#### Idle State (No Data Writes)
| Metric | Usage Rate | Actual Usage |
| :--- | :--- | :--- |
| **Total CPU** | 4.2% - 7.4% | Max ~7.4% on single core |
| **Total Memory** | ~35.2% | ~651MB |
| **Disk Write** | 0 - 0.07MB/s | Almost None |
| **ThingsPanel CPU** | ~2.2% | ~2.2% single core |
| **ThingsPanel Memory** | ~21.2% | ~436MB |

#### Load State (High Volume Data Writes)
| Metric | Usage Rate | Actual Usage |
| :--- | :--- | :--- |
| **Total CPU** | 92.3% - 94.1% | Single core saturated |
| **Total Memory** | 36.4% - 36.9% | ~682MB |
| **Disk Write (mmcblk0p2)** | 2.3 - 7.1MB/s | Peak 7.1MB/s |
| **ThingsPanel CPU** | 82.3% - 113.2% | >100% of a single core |
| **ThingsPanel Memory** | 28.0% - 30.9% | 566MB - 621MB |

### Component Resource Analysis

#### PostgreSQL Database
*   **Idle** - CPU: ~0%, Memory: 13.2% (267.3MB), Disk Write: ~0
*   **Load** - CPU: 80.1% - 111.0%, Memory: 19.9% - 22.8% (396MB - 451MB), Disk Write: 2.3 - 7.1MB/s
*   **Characteristics**:
    *   Main consumer of CPU, Memory, and Disk I/O.
    *   CPU utilization can exceed single-core capacity under load.
    *   Data writing generates heavy Disk I/O, the system bottleneck.

#### Redis
*   **Idle/Load** - CPU: ~1.6%, Memory: 0.4% (18.7MB), I/O negligible.
*   **Characteristics**: Stable resource usage.

#### GMQTT (MQTT Broker)
*   **Idle/Load** - CPU: ~0%, Memory: 0.1% (2.5MB), I/O negligible.
*   **Characteristics**: Extremely low resource usage, stable even under frequent MQTT messaging.

#### Backend API
*   **Idle/Load** - CPU: ~0%, Memory: 0.1% (2.7MB).
*   **Characteristics**: Low usage, mainly coordinating data flow.

#### Nginx
*   **Idle/Load** - Stable, lightweight. Memory ~0.9%.

#### NodeJS/PM2
*   **Idle/Load** - Memory ~6.5% (127MB), CPU Low.
*   **Characteristics**: Moderate memory usage.

### Disk I/O Performance Analysis

1.  **I/O Load Correlates with CPU Load**:
    *   During CPU peaks (90%+), partition write speed is stable at 2.3-3.0 MB/s.
    *   Peak moments reach 7.1 MB/s.

2.  **Storage Performance**:
    *   Class 10 TF Card random write performance is a system bottleneck.
    *   Peak 7.1MB/s is close to the Class 10 random write limit.
    *   High partition usage (94%) may negatively affect write performance.

3.  **Database I/O Characteristics**:
    *   PostgreSQL generates almost all disk writes.
    *   Write pattern is bursty but stable during load.

### Load Test Analysis

1.  **Data Write Capability**:
    *   System handled approx. 989 points/sec write rate.
    *   Peak handling capability observed at ~710 points/sec DB write rate during stress.

2.  **System Response**:
    *   CPU usage spikes to >90% under high frequency writes.
    *   PostgreSQL is the main resource hog.
    *   Memory usage remains stable (+1.7% increase).

### Key Bottleneck Identification

1.  **Primary Bottleneck - Storage I/O**:
    *   Class 10 TF Card random write speed hits the limit.
    *   Peak 7.1MB/s.
    *   Major factor affecting stability under high throughput.

2.  **Secondary Bottleneck - CPU**:
    *   PostgreSQL exceeds 100% CPU (single core) under high load.
    *   Multi-core utilization helps.

3.  **Non-Bottleneck - Memory**:
    *   2GB RAM has plenty of headroom.

### Conclusion & Recommendations

#### Overall Assessment

ThingsPanel performs well on Raspberry Pi (2GB) for small/medium IoT needs:

1.  **Feasibility**: Stable operation on 2GB RAM.
2.  **Performance**: Sustainable ~600-700 points/sec.
3.  **Efficiency**: Low idle consumption.
4.  **Scalability**: Stable memory usage under load.

#### Optimization Recommendations

**Storage Optimization (Priority 1)**:
*   Use A2-class SD cards or external SSD via USB 3.0.
*   Clean up root partition.
*   Move PostgreSQL data directory to faster storage.

**SD Card vs. SSD Performance Comparison**

| Metric | Class 10 SD Card | SSD (USB 3.0) | Improvement |
| :--- | :--- | :--- | :--- |
| **Random Write Speed** | 2-7 MB/s | **80-300 MB/s** | **10-30x** |
| Data Processing | ~700 pts/s | 3,500-10,000 pts/s | 5-15x |
| DB Query Response | Slow | Significantly Faster | 5-15x |
| CPU Usage (High Load) | 90-110% | 30-50% | Reduced by 60-70% |
| Stability | Bottleneck | Greatly Improved | Qualitative Leap |

### Summary

ThingsPanel is viable on ARM devices like Raspberry Pi, effectively supporting edge IoT scenarios. The main bottleneck is Storage I/O. With proper storage optimization, performance can be significantly boosted. For larger deployments, Raspberry Pi 4GB+ version with High Performance Storage is recommended.

## Cloud Server Test Report

### Core Conclusion

ThingsPanel New Architecture performs excellently in a 10,000 device concurrent scenario:

*   Single Cluster supports 25,000 writes/sec, CPU peak < 82%.
*   Stable metrics under high concurrency, no delays/backlogs.
*   Estimated support for **400,000 devices** (at 4 points/min/device) with current hardware.

### 1. Test Background

Validating concurrency capability of the new architecture using a 3-node cluster.

### 2. Test Environment

#### Server Config

| Type | CPU | RAM | Disk | Role |
| :--- | :--- | :--- | :--- | :--- |
| Server 1 | Intel Xeon Platinum 8269CY @ 2.50GHz (4 Core) | 8GB | ESSD PL0 40GiB (2280 IOPS) | DB, Broker |
| Server 2 | Intel Xeon Platinum 8269CY @ 2.50GHz (4 Core) | 8GB | ESSD PL0 40GiB (2280 IOPS) | DB, Broker |
| Server 3 | Intel Xeon Platinum 8269CY @ 2.50GHz (4 Core) | 8GB | ESSD PL0 40GiB (2280 IOPS) | App Platform, DB, LB |

#### Parameters
*   Device Count: 5,000 / 10,000
*   Frequency: 16 points per 6.4 seconds per device.
*   Duration: 24 Hours.

### 3. Test Results

#### Performance Metrics

| Device Count | Write Speed | CPU Usage (%) | Memory Usage (%) | Intranet Bandwidth | Disk R/W |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 5,000 | 12,000/s | 36 / 37 / 40 | 35 / 37 / 17 | 25M | 38M |
| 10,000 | 25,000/s | 72 / 73 / 82 | 45 / 48 / 17 | 48M | 76M |

#### Stability
*   **Throughput**: 25,000 writes/sec sustained.
*   **Response Time**: Web Ops < 200ms.
*   **Queue**: No backlog.
*   **Query**: History Data < 500ms.

### 4. Analysis

1.  **Capacity**: 82% CPU at 25k/s writes indicates remaining headroom.
2.  **Efficiency**: CPU scales linearly. Memory management is efficient. Disk I/O is within limits.
3.  **Network**: Low latency, efficient cluster communication.

#### Scalability Assessment
1.  **Single Cluster**: Supports ~400k devices theoretically.
2.  **Horizontal Scale**: Can scale to millions linearly.
3.  **Bottleneck**: CPU is the primary bottleneck.

### 5. Recommendations

1.  **Hardware**: Upgrade to 8-Core CPUs; Use higher performance ESSD.
2.  **Software**: Optimize batch writing; Implement smart Load Balancing.

### Conclusion

The test confirms that ThingsPanel architecture has excellent concurrency and scalability. A mid-range configuration can stably support tens of thousands of devices, laying a foundation for large-scale IoT applications.
