var push = require('web-push');

let vapidKeys = {
    publicKey: 'BIkfvcMWikkAQDjmeL6aoisHpSE9IK6gNiZrGnv1rTNogAsnV4HiJ1OPOncVbVFttyMXz6naDt-xhCoyKs89jEg',
    privateKey: 'ZWf2Nxi6gcxT-jDOXjNeVP-jw6JUm-SGKnMmkUubEfw'
  }

  push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)
  
  let sub = {};
  push.sendNotification(sub,'test message')
