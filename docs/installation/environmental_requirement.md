---
sidebar_position: 1
---

# System Requirements

## Hardware Requirements

### Minimum Test Configuration

ThingsPanel typically consumes less than 100MB of memory overall, but may reach several hundred MB after installing essential services. A device with 1GB memory is sufficient for testing in environments with a small number of devices.

| Item | Requirement |
| :--- | :--- |
| CPU | 1 Core 2.0GHz+ |
| Memory | 1GB |
| Disk | 20GB |

### R&D Test Configuration

| Item | Requirement |
| :--- | :--- |
| CPU | 2 Core+ 2.5GHz+ |
| Memory | 4GB+ |
| Disk | 40GB+ |

### Production Environment Configuration

We recommend **Cluster Deployment** to ensure high system availability:

| Item | Minimum Requirement | Recommended Configuration |
| :--- | :--- | :--- |
| CPU | 4 Core+ 2.5GHz+ | 8 Core+ 3.0GHz+ |
| Memory | 8GB+ | 16GB+ |
| Disk | 40GB+ SSD | 100GB+ SSD |
| Server Count | 2-3 Nodes | 3-5 Nodes |

#### CPU Architecture Support

- **x86**: Supports Intel, AMD, and other mainstream server CPUs.
- **ARM**: Supports Phytium, Kunpeng, and other domestic CPUs.
- **RISC-V**: Supports Zhaoxin, Hygon, and other domestic CPUs.

#### Server Architecture Requirements

- Supports mainstream server form factors: Tower, Rack, Blade.
- **Rack-mounted servers** are recommended for easier management and expansion.
- Redundant power supplies and RAID configurations are recommended.

#### Localization (Domestic Adaptation) Support

- **Operating Systems**:
  - Supports UnionTech UOS, Kylin, and other domestic operating systems.
  - Supports openEuler, EulerOS, and other domestic server operating systems.
- **Databases**:
  - Supports Alibaba Cloud PolarDB, KingBase, and other domestic databases.

### Recommendations

- **Cluster Deployment** is recommended for production business configurations to ensure high availability.
- Dynamically scale capacity based on CPU, memory, and disk monitoring.
- Use **SSD** or other high-performance storage.
- Enable snapshots or backups to protect data.
- Configure separate Management and Business networks.
