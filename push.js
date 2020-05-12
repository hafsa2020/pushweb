var push = require('web-push');

let vapidKeys = {
    publicKey: 'BIkfvcMWikkAQDjmeL6aoisHpSE9IK6gNiZrGnv1rTNogAsnV4HiJ1OPOncVbVFttyMXz6naDt-xhCoyKs89jEg',
    privateKey: 'ZWf2Nxi6gcxT-jDOXjNeVP-jw6JUm-SGKnMmkUubEfw'
  }

  push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)
  
  let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fjKO7k4VjB8:APA91bHUYlslVpVOKQ5MEuJzE187wCJy7oIUsvCd2bYweiz-5tLMNsH6xJjGh7sEadvkws4wb6QyDbZu3o9AsNE13b30cecdAGOrBuIpnc9EC6PFonVvEUxuHT7XPdPxXIW5Vrh2qauR","expirationTime":null,"keys":{"p256dh":"BNxdQu3fWkxf7gSyxlmGjjZX4jVWp6xpwGYy4_Nj3a9CH5ULOhb28j68_aokJXZUjUnFpERwjdgchwNVYXBdz3U","auth":"ZkZI5_eV0mb_Z30yjfJinQ"}};
  push.sendNotification(sub,'test message')
