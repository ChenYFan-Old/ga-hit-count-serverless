/**
 * Google Analytics query configurations
 *
 * ! If you are deploying this with your own account
 * ! , then you will need to change this config file.
 * ! Don't put your privateKey inside this file directly!
 */
export default {
  viewId: '229822278',
  auth: {
    projectId: 'atlantean-study-295701',
    privateKey: process.env.PRIVATE_KEY,
    clientEmail: 'ga-hit-chenyfan@atlantean-study-295701.iam.gserviceaccount.com',
  },
  allFilter: ['/'],
  startDate: '2010-01-01',
}
