const notificationSchemas ={
    name: 'Notification',
    primarykey: 'id',
    properties: {
        id: { type: 'int', indexed: true },
        title: 'string',
        description: 'string',
        date: 'int'
    }
}

export default notificationSchemas