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
      InternetSubscriptions: {
        sql: `Internet_subscriptions`,
        type: `sum`
      },
      
      DialUpSubscriptions: {
        sql: `Dialup_subscriptions_iii`,
        type: `sum`
      },
  
      BroadBandSubscriptions: {
        sql: `Broadband_subscriptions`,
        type: `sum`
      }
    },
    dimensions:{
        StatisticsArabic:{
            sql:'Statistics_English',
            type:'time'
        }
    }
  

    
  });
  