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
    statisticsArabic: {
      sql: `statistics_arabic`,
      type: `string`
    },
    
    statisticsEnglish: {
      sql: `statistics_english`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
