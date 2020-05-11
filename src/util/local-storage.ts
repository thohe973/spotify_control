export const getControlDeviceId = () => {
  const deviceJSON = localStorage.getItem('controlDevice');
  if (deviceJSON) {
    const device = JSON.parse(deviceJSON);
    return device.id;
  }
  return null;
}
