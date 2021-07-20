import Realm from 'realm';

import NotificationSchemas from '../schemas/notificationSchemas';

export default function getRealm() {
  return Realm.open({
    schema: [NotificationSchemas],
  });
}
