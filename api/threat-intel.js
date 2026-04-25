export default function handler(req, res) {
  // Simulate a delay for realism
  setTimeout(() => {
    const threatData = [
      {
        id: 1,
        type: 'ioc',
        title: 'Malicious IP range detected: 185.130.105.0/24',
        time: new Date().toLocaleTimeString(),
        severity: 'high'
      },
      {
        id: 2,
        type: 'alert',
        title: 'APT29 campaign activity observed in Eastern Europe',
        time: new Date(Date.now() - 5 * 60 * 1000).toLocaleTimeString(),
        severity: 'critical'
      },
      {
        id: 3,
        type: 'info',
        title: 'New ransomware variant "LockBit 3.0" identified',
        time: new Date(Date.now() - 12 * 60 * 1000).toLocaleTimeString(),
        severity: 'medium'
      },
      {
        id: 4,
        type: 'ioc',
        title: 'Phishing domain identified: secure-paypal-update[.]tk',
        time: new Date(Date.now() - 20 * 60 * 1000).toLocaleTimeString(),
        severity: 'medium'
      },
      {
        id: 5,
        type: 'alert',
        title: 'Zero-day vulnerability in Apache Log4j (CVE-2021-44228) exploit attempts increasing',
        time: new Date(Date.now() - 30 * 60 * 1000).toLocaleTimeString(),
        severity: 'critical'
      }
    ];

    res.status(200).json(threatData);
  }, 500); // 500ms delay to simulate network
}