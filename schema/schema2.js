//a schema to show how all the types of subscriptions has changed over time
cube(`Charcentric`, {
    sql: `SELECT * FROM public.charcentric`,
    
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
    },
    
    joins: {
      
    },
    
    measures: {
      count: {
        type: `count`,
        drillMembers: []
      }
    },
    
    dimensions: {
      InternetSubscriptions: {
        sql: `Internet_subscriptions`,
        type: `number`
      },
      
      DialUpSubscriptions: {
        sql: `DialUp_subscriptions`,
        type: `number`
      },
  
      BroadBandSubscriptions: {
        sql: `Broadboand_subscriptions`,
        type: `number`
      },
    },

    
    dataSource: `default`
  });
  