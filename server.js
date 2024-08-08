const strapi = require('@strapi/strapi');

async function startStrapi() {
  const app = await strapi().load();
  app.start();
}

startStrapi().catch(err => {
  console.error('Failed to start Strapi:', err);
});
