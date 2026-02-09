# MLS Gateway

## Overview
The MLS Gateway is a comprehensive solution designed to facilitate the integration and management of multiple listing services (MLS) within various applications. This documentation provides detailed insights into the structure, functionality, and usage of the MLS Gateway.

## Features
- **Multi-MLS Support**: Seamlessly connect with various MLS systems.
- **Real-time Data Sync**: Ensure that your applications have the most up-to-date information.
- **Flexible API**: Easily integrate with different platforms and technologies.

## Getting Started
### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Kameronf1213/mls-gateway.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mls-gateway
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Configuration
Before running the application, configure your MLS connections by editing the `config.json` file as follows:
```json
{
  "mlsList": [
    {
      "name": "MLS1",
      "apiKey": "YOUR_API_KEY1"
    },
    {
      "name": "MLS2",
      "apiKey": "YOUR_API_KEY2"
    }
  ]
}
```

## Usage
To start the application, use the following command:
```bash
npm start
```

## API Endpoints
### GET /api/listings
Fetch listings from all connected MLS systems.

### POST /api/sync
Synchronize the listings with the latest data from the MLS systems.

## Troubleshooting
- Ensure that your API keys are correct.
- Check network connectivity if data fetching fails.

## Contributing
Contributions are welcome! Please follow the standard pull request process.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any inquiries, please reach out to the maintainer at Kameronf1213@example.com.