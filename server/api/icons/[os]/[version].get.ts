export default defineEventHandler((event) => {
  const { os, version } = event.context.params;

  // Simulated database response
  const icons = [
    {
      id: 1,
      name: `${os} ${version} Logo`,
      path: `https://via.placeholder.com/150?text=${os}+${version}`,
    },
  ];

  return icons;
});