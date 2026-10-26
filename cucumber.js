module.exports = {
  default: {
    requireModule: ['tsx'],   
    paths: ['src/tests/features/*.feature'],   
    require:['src/tests/steps/*.step.ts',
             'src/tests/commons/hooks.ts'
    ],
    format: ['progress-bar',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json',
    ],

    dryRun:false
  }
};
